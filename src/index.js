module.exports = {
  plugin: (schema, documents, config) => {
    // TODO: generate sql-monster info
    return '// TBD'
  },
  addToSchema: `
    directive @db on OBJECT
    directive @nodb on FIELD | FIELD_DEFINITION
    directive @link(field: String!) on FIELD | FIELD_DEFINITION
  `
}
