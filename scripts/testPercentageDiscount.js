/**
 * Test script for percentage discount calculation
 * Run with: node scripts/testPercentageDiscount.js
 */

import { Discount, ProductVariant, Product } from '../models/index.js';
import discountService from '../services/discountService.js';

async function testPercentageDiscount() {
  console.log('=== Testing Percentage Discount Calculation ===\n');

  // Test 1: Get all active discounts
  console.log('Test 1: Fetching active discounts...');
  const activeDiscounts = await discountService.getActiveDiscounts();
  console.log(`Found ${activeDiscounts.length} active discounts`);

  // Filter for percentage discounts
  const percentageDiscounts = activeDiscounts.filter(d => d.discount_type === 'percentage');
  console.log(`Found ${percentageDiscounts.length} percentage discounts\n`);

  // Test 2: Create a mock cart with items
  console.log('Test 2: Creating mock cart items...');
  const mockCartItems = [
    { product_variant_id: 1, quantity: 2 },
    { product_variant_id: 2, quantity: 1 },
  ];
  console.log('Mock cart items:', mockCartItems);
  console.log('');

  // Test 3: Validate a percentage discount code
  if (percentageDiscounts.length > 0 && percentageDiscounts[0].code) {
    const testCode = percentageDiscounts[0].code;
    console.log(`Test 3: Validating code "${testCode}"...`);

    const validationResult = await discountService.validateCode(testCode, mockCartItems);
    console.log('Validation result:', {
      valid: validationResult.valid,
      reason: validationResult.reason,
      hasEligibility: !!validationResult.eligibility,
      matchingAmount: validationResult.eligibility?.matchingAmount,
    });
    console.log('');

    // Test 4: Apply discount with order draft
    console.log('Test 4: Applying discount with order draft...');
    const orderDraft = {
      subtotal: 1000000, // 1 million VND
      shipping_fee: 50000,
      cart_items: mockCartItems,
    };

    const applyResult = await discountService.applyDiscount(orderDraft, testCode);
    console.log('Apply result:', {
      applied: applyResult.applied,
      amount: applyResult.amount,
      discountType: applyResult.discount?.discount_type,
      discountValue: applyResult.discount?.discount_value,
      applicableTo: applyResult.discount?.applicable_to,
    });
    console.log('');

    // Test 5: Apply discount WITHOUT subtotal (fallback test)
    console.log('Test 5: Applying discount WITHOUT subtotal (fallback)...');
    const orderDraftWithoutSubtotal = {
      cart_items: mockCartItems,
    };

    const applyResultFallback = await discountService.applyDiscount(orderDraftWithoutSubtotal, testCode);
    console.log('Apply result (fallback):', {
      applied: applyResultFallback.applied,
      amount: applyResultFallback.amount,
      discountType: applyResultFallback.discount?.discount_type,
      discountValue: applyResultFallback.discount?.discount_value,
    });
    console.log('');
  }

  // Test 6: Manual calculation test
  console.log('Test 6: Manual calculation verification...');
  const testSubtotal = 500000; // 500k VND
  const testPercentage = 10; // 10%
  const expectedAmount = (testSubtotal * testPercentage) / 100;
  console.log(`Subtotal: ${testSubtotal} VND`);
  console.log(`Percentage: ${testPercentage}%`);
  console.log(`Expected discount: ${expectedAmount} VND`);
  console.log('');

  console.log('=== Tests Complete ===');
  process.exit(0);
}

testPercentageDiscount().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
