const classes = {
    peopleLink: "text-white hover:text-custom-pri text-xl",
    peopleContainer: "flex flex-row justify-center items-center w-2/5 m-10 border-2 border-transparent hover:border-custom-pri border-solid px-20 py-10 rounded",
    peopleUsernames: "ml-5 text-gray-400",
    peoplesBox: "flex flex-col text-center justify-around mx-10",
}

export default function PeoplePage() {
    return (
      <main className="text-center h-full">
        <div className="text-center text-6xl font-bold mt-8 font-pacifico">My <span className="text-custom-pri">People</span></div>

        <div className={classes.peoplesBox}>
            <div className={classes.peopleContainer}>
                <a className={classes.peopleLink} href="https://github.com/DrShahinstein">DrShahinstein</a> <br/>
                <small className={classes.peopleUsernames}>Taylan</small>
            </div>
            <div className={classes.peopleContainer}>
                <a className={classes.peopleLink} href="https://twitter.com/Emreasaurus">Twitter</a> <br/>
                <small className={classes.peopleUsernames}>@Emreasaurus</small>
            </div>
            <div className={classes.peopleContainer}>
                <a className={classes.peopleLink} href="https://soundcloud.com/reo-522799201">SoundCloud</a> <br/>
                <small className={classes.peopleUsernames}>soundcloud/reo-522799201</small>
            </div>
            <div className={classes.peopleContainer}>
                <a className={classes.peopleLink} href="https://t.me/reo006">Telegram</a> <br/>
                <small className={classes.peopleUsernames}>@reo006</small>
            </div>
        </div>
      </main>
    )
  }
  