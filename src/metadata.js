export default {
  type: 'peritext-contextualizer',
  id: 'table',
  name: 'Table',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [{type: 'table'}],
    block: {
      expandable: false,
      options: [
        {
          id: 'pageRowsLimit',
          title: {
            fr: 'Nombre de lignes à afficher dans les rendus "page"',
            en: 'Number of rows to display in "page" outputs',
          },
          type: 'number',
          default: 50,
          minimum: 1,
          maximum: 100000
        },
      ]
    }
  }
}