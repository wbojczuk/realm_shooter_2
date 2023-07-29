import Head from "next/head";

export default function PreloadAssets() {
    // PRELOAD
const imageURLS = [
    "/assets/main_menu/icons/play_icon.svg",
    "/assets/main_menu/icons/settings_icon.svg",
    "/assets/main_menu/icons/profile_icon.svg"
]
const preloadLinks = imageURLS.map((url)=>{
return(
    <link
    rel="preload"
    href={url}
    as="image"
    ></link>
)
})

  return (
   <Head>
        {preloadLinks}
   </Head>
  )
}


