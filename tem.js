export default defineAppConfig({
    ui: {
      navigationMenu: {
        variants: {
          color: {
            primary: {
              link: 'focus-visible:before:ring-(--ui-primary)',
              childLink: 'focus-visible:outline-(--ui-primary)'
            }
          },
          highlightColor: {
            primary: '',
            secondary: '',
            success: '',
            info: '',
            warning: '',
            error: '',
            neutral: ''
          },
          active: {
            true: {
              childLink: 'bg-(--ui-bg-elevated) text-(--ui-text-highlighted)',
              childLinkIcon: 'text-(--ui-text)'
            },
            false: {
              link: 'text-(--ui-text-muted)',
              linkLeadingIcon: 'text-(--ui-text-dimmed)',
              childLink: [
                'hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)',
                'transition-colors'
              ],
              childLinkIcon: [
                'text-(--ui-text-dimmed) group-hover:text-(--ui-text)',
                'transition-colors'
              ]
            }
          },
        
        },
      }
    }
  })
  