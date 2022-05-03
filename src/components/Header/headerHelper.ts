interface headerProp {
  title: string
  visible: boolean
  size: 'big' | 'small'
}

export const getHeaderProp = (name: string): headerProp => {
  const initialScreenProp: headerProp = {
    title: 'Home',
    visible: false,
    size: 'big'
  }
  switch (true) {
    // TABS
    case name === 'TAB_HOME':
      return {
        title: 'Home',
        visible: false,
        size: 'big'
      }
    case name === 'TAB_SHOP':
      return {
        title: 'Shop',
        visible: true,
        size: 'small'
      }
    case name === 'TAB_BAG':
      return {
        title: 'Bag',
        visible: true,
        size: 'big'
      }
    case name === 'TAB_FAVORITES':
      return {
        title: 'Favorites',
        visible: true,
        size: 'big'
      }
    case name === 'TAB_PROFILE':
      return {
        title: 'Profile',
        visible: true,
        size: 'big'
      }
    // STACK
    case name === 'EXAMPLES':
      return {
        title: 'Examples',
        visible: true,
        size: 'big'
      }
    // Put the props for the start screen
    default:
      return initialScreenProp
  }
}
