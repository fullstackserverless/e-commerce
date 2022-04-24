export type RootTabParamList = {
    TAB_HOME: undefined
    TAB_SHOP: undefined
    TAB_BAG: undefined
    TAB_FAVORITES: undefined
    TAB_PROFILE: undefined
}

export type RootStackParamList = {
    EXAMPLES: undefined
    MAIN: undefined
}

export type HeaderContextProp = {
    headerProp: headerType,
    setHeaderSize: (size: headerSize) => void
    setHeaderVisible: (visible: boolean) => void
    setHeaderTitle: (title: string) => void
}

export type headerType = {
    headerSize: headerSize
    headerVisible: boolean
    headerTitle?: string
}

export type headerSize = 'big' | 'small'