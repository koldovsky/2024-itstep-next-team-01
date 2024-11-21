"use client";

import { useState, useEffect } from "react";

type QuoteProps = {
    readonly initialQuote?: string;
    readonly initialAuthor?: string;
  };

export default function Quote({ initialQuote, initialAuthor }: QuoteProps) {
    const [quote, setQuote] = useState(initialQuote ?? "Loading...");
    const [author, setAuthor] = useState(initialAuthor ?? "");

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch("/api/quote");
                const data = await response.json();
                setQuote(data.quote);
                setAuthor(data.author);
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };

        if (!initialQuote) {
            fetchQuote();
        }
    }, [initialQuote]);

    return (
        <>
            <div className="border-b-2 border-t-2 border-primeryBorder flex flex-col items-center py-8 px-4 text-center w-[95%]">
                <p className="text-primaryText text-2xl italic ">
                    {`"${quote}"`}
                </p>
            </div>
            {author && (
                <span className="text-primaryText mt-4 font-mrsSaint text-[32px]">{`— ${author} —`}</span>
            )}
        </>
    );
}
