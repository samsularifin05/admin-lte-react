const handleSetPageSidebar = (state) => state.themes.handleSetPageSidebar
const handleSetPageHeader = (state) => state.themes.handleSetPageHeader
const handleSetContent = (state) => state.themes.handleSetContent
const handleSetFooter = (state) => state.themes.handleSetFooter


const selectorThemes = {
    handleSetPageSidebar,
    handleSetPageHeader,
    handleSetContent,
    handleSetFooter
}

export {
    selectorThemes
}