import { DefaultTags } from "@ui/DefaultTags"

export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>PromptCanvas</title>
      <meta
        name="description"
        content="An open source application built using the new router, server components and everything new in Next.js 13."
      />
      <meta property="og:title" content="PromptCanvas" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost:3000" />
      <meta
        property="og:image"
        content="http://localhost:3000og.jpg"
      />
      <meta name="twitter:title" content="PromptCanvas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="http://localhost:3000"
      />
      <meta
        name="twitter:image"
        content="http://localhost:3000og.jpg"
      />
    </>
  )
}
