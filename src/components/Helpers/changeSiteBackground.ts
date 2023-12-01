export const ChangeSiteBackground = (image: string) => {
    document.body.style.backgroundImage = `url(${image})`
    document.body.style.backgroundSize = 'cover'
}