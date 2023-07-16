import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { type Event } from "@prisma/client";

export default function NewEvent() {
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
                        <form action="/createEvent" method="post">
                            <div>
                                <label htmlFor="eventTitle">Event title</label>
                                <input type="text" id="eventTitle" name="eventTitle" />
                            </div>
                            <div>
                                <label htmlFor="eventStartAt">
                                    Starts at
                                </label>
                                <input type="datetime-local" name="eventStartAt" id="eventStartAt" />
                            </div>
                            <div>
                                <label htmlFor="eventEndAt">
                                    Ends at
                                </label>
                                <input type="datetime-local" name="eventEndAt" id="eventEndAt" />
                            </div>
                        </form>
                    </fieldset>
                </div>
            </main>
        </>
    )
}