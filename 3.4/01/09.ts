let anyObject: any
let hasStringObject: { value: string }
let hasLiteralObject: { value: 'value' }

// anyObject = { value: 'value' } // No Error
// hasStringObject = { value: 'value' } // No Error
// hasLiteralObject = { value: 'value' } // No Error

// anyObject = { value: 'val' } // No Error
// hasStringObject = { value: 'val' } // No Error
// hasLiteralObject = { value: 'val' } // Error

// hasLiteralObject = { value: 'val' } // Error
// hasLiteralObject = { value: 'val' } as any // No Error

// hasStringObject = { value: 'val' } // No Error
// hasStringObject = { value: 'val' } as { value: 'value' } // Error
