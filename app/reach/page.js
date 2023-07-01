const classes = {
    contactLink: "text-white hover:text-custom-pri text-xl",
    contactContainer: "m-10 border-2 border-transparent hover:border-custom-pri border-solid px-20 py-10 rounded",
    contactUsernames: "text-gray-400",
}

export const metadata = {
    title: 'reach out - reo',
    description: 'reo\'s personal website.',
  }

export default function ContactPage() {
    return (
      <main className="text-center">
        <div className="text-center text-6xl font-bold mt-8 font-pacifico">Reach <span className="text-custom-pri">Out</span></div>

        <div className="flex flex-col text-center justify-around mx-10 sm:flex-row">
            <div className={classes.contactContainer}>
                <a className={classes.contactLink} href="https://github.com/reo6">GitHub</a> <br/>
                <small className={classes.contactUsernames}>reo6</small>
            </div>
            <div className={classes.contactContainer}>
                <a className={classes.contactLink} href="https://twitter.com/Emreasaurus">Twitter</a> <br/>
                <small className={classes.contactUsernames}>@Emreasaurus</small>
            </div>
            <div className={classes.contactContainer}>
                <a className={classes.contactLink} href="https://soundcloud.com/reo-522799201">SoundCloud</a> <br/>
                <small className={classes.contactUsernames}>soundcloud/reo-522799201</small>
            </div>
            <div className={classes.contactContainer}>
                <a className={classes.contactLink} href="https://t.me/reo006">Telegram</a> <br/>
                <small className={classes.contactUsernames}>@reo006</small>
            </div>
        </div>
      </main>
    )
  }
  