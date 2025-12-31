import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";
import { setUpdatedAtHook } from "./hooks.js";

/**
 * Collection Model
 *
 * Represents marketing collections (seasonal, promo, concept-based)
 * Examples: "Fall Winter 2025", "Tet Sale", "Summer Essentials"
 */
export const Collection = sequelize.define("collections", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Collection name cannot be empty"
      }
    }
  },
  slug: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Collection slug cannot be empty"
      }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  banner_image: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: "URL to collection banner/hero image"
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Optional start date for time-based collections"
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "Optional end date for time-based collections"
  },
  status: {
    type: DataTypes.ENUM('draft', 'active', 'archived'),
    defaultValue: 'draft',
    allowNull: false
  },
  sort_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    comment: "Display order for collections listing"
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'collections',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      unique: true,
      fields: ['slug']
    },
    {
      fields: ['status']
    },
    {
      fields: ['sort_order']
    },
    {
      fields: ['start_date', 'end_date']
    }
  ]
});

// Hook to auto-generate slug from name if not provided
Collection.beforeValidate((collection) => {
  if (collection.name && !collection.slug && collection.isNewRecord) {
    // Simple slug generation - uniqueness checked in service layer
    collection.slug = collection.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/-+/g, '-'); // Replace multiple - with single -
  }
});

// Hook to validate date ranges
Collection.addHook('beforeValidate', 'validateDateRange', (collection) => {
  if (collection.start_date && collection.end_date) {
    if (collection.start_date > collection.end_date) {
      throw new Error('start_date must be before end_date');
    }
  }
});

setUpdatedAtHook(Collection);
