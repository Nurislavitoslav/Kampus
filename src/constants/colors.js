javascript
export const colors = {
  // Primary / Brand
  PRIMARY: '#1E40AF',
  PRIMARY_LIGHT: '#DBEAFE',
  PRIMARY_DARK: '#1E3A8A',

  // Surfaces
  BACKGROUND: '#F8FAFC',
  SURFACE: '#FFFFFF',
  SURFACE_DARK: '#0F172A',

  // Typography
  TEXT_PRIMARY: '#1E293B',
  TEXT_SECONDARY: '#64748B',
  TEXT_MUTED: '#94A3B8',
  TEXT_INVERSE: '#FFFFFF',

  // Semantic
  SUCCESS: '#16A34A',
  SUCCESS_LIGHT: '#DCFCE7',
  WARNING: '#D97706',
  WARNING_LIGHT: '#FEF3C7',
  ERROR: '#DC2626',
  ERROR_LIGHT: '#FEE2E2',
  INFO: '#2563EB',
  INFO_LIGHT: '#DBEAFE',

  // Borders
  BORDER: '#E2E8F0',
  BORDER_FOCUS: '#1E40AF',
  OVERLAY: 'rgba(0,0,0,0.5)',
};

export const shadows = {
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  modalShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 10,
  },
};
```

src/constants/typography.js

```javascript
export const typography = {
  H1: { fontSize: 28, fontWeight: '700', lineHeight: 34 },
  H2: { fontSize: 22, fontWeight: '700', lineHeight: 28 },
  H3: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
  BODY: { fontSize: 15, fontWeight: '400', lineHeight: 22 },
  BODY_MEDIUM: { fontSize: 15, fontWeight: '500', lineHeight: 22 },
  CAPTION: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
  CAPTION_MEDIUM: { fontSize: 12, fontWeight: '500', lineHeight: 16 },
};
```

src/constants/spacing.js

```javascript
export const spacing = {
  XS: 4,
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 24,
  XXL: 32,
  XXXL: 48,
};

export const radius = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  PILL: 100,
};

