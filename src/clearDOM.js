export function clearDOM() {
    let content = document.getElementById('content')
    let childCount = content.childElementCount
    let i
    for (i = childCount; i>1; i--) {
        content.removeChild(content.lastChild)
    }
}