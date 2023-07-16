import Head from "next/head";

export default function NewEvent() {
    const handleSubmit = async (event): Promise<void> => {
        event.preventDefault()

        const data = {
            title: event.target.eventTitle.value,
            startsAt: event.target.eventStartAt.value,
            endsAt: event.target.eventEndAt.value,
            location: event.target.eventLocation.value,
            description: event.target.eventDescription.value,
        }

        const JSONData = JSON.stringify(data)

        const endpoint = '/api/v1/createEvent'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONData,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        alert(`The title of this is: ${result.data}`)
    };

    return (
        <>
            <Head>
                <title>Playdate Finder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Add an <span className="text-[hsl(280,100%,70%)]">Event</span>
                    </h1>
                    <fieldset className="bg-neutral-200 current border-8 rounded">
                        <form action="/api/v1/createEvent" method="post" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="eventTitle">Event title</label>
                                <input type="text" id="eventTitle" name="eventTitle" required maxLength={254} minLength={1} />
                            </div>
                            <div>
                                <label htmlFor="eventStartAt">
                                    Starts at
                                </label>
                                <input type="datetime-local" name="eventStartAt" id="eventStartAt" required />
                            </div>
                            <div>
                                <label htmlFor="eventEndAt">Ends at</label>
                                <input type="datetime-local" name="eventEndAt" id="eventEndAt" required />
                            </div>
                            <div>
                                <label htmlFor="eventLocation">Location</label>
                                <input type="text" name="eventLocation" id="eventLocation" required maxLength={254} />
                            </div>
                            <div>
                                <label htmlFor="eventDescription">Description</label>
                                <textarea name="eventDescription" id="eventDescription" />
                            </div>
                            <div className="flex flex-col actions items-center">
                                <button type="submit" id="submit" name="submit">Create</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </main>
        </>
    )
}