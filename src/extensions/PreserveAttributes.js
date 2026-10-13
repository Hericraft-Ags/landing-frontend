import { Extension } from '@tiptap/core'

const PreserveAttributes = Extension.create({
  name: 'PreserveAttributes',
  addGlobalAttributes() {
    return [
      {
        types: [
          'paragraph',
          'heading',
          'blockquote',
          'bulletList',
          'orderedList',
          'listItem',
          'codeBlock',
          'horizontalRule',
          'image',
          'table',
          'tableRow',
          'tableCell',
          'tableHeader',
          'div',
        ],
        attributes: {
          style: {
            default: null,
            parseHTML: element => element.getAttribute('style'),
            renderHTML: attributes => {
              if (!attributes.style) return {}
              return { style: attributes.style }
            },
          },
          class: {
            default: null,
            parseHTML: element => element.getAttribute('class'),
            renderHTML: attributes => {
              if (!attributes.class) return {}
              return { class: attributes.class }
            },
          },
        },
      },
    ]
  },
})

export default PreserveAttributes
