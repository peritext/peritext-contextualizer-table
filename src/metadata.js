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
      options: []
    }
  }
}