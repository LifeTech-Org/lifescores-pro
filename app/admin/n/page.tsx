"use client"
import { Button } from "@/app/components/form/button";
import { InputText } from "@/app/components/form/text";
import { competitionTypes } from "@/app/utils/data";
import { readFile } from "@/app/utils/func/readFile";
import { TVoid } from "@/app/utils/types";
import { TNewCompetiton } from "@/app/utils/types/competition";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

export default function New() {
    const [step, setStep] = useState(1);
    const [competition, setCompetition] = useState<TNewCompetiton>({
        name: "",
        description: "",
    });
    const nextStep = () => {
        setStep((_step) => _step + 1);
    }
    const prevStep = () => {
        setStep((_step) => _step - 1);
    }
    return <section className="flex justify-center px-4">
        <div className="w-full sm:w-80 flex flex-col">
            <h3 className="text-zinc-200 text-lg">Start new competition</h3>
            <h4>With just $5, Enjoy a lifetime access.</h4>
            {
                step === 1 && <Step1 {...{ competition, setCompetition, nextStep }} />
            }
            {
                step === 2 && <Step2 {...{ competition, setCompetition, nextStep, prevStep }} />
            }
            {
                step === 3 && <Step3 {...{ competition, setCompetition, prevStep }} />
            }
        </div>
    </section>
}

//  Choosse type
const Step1 = ({ competition, setCompetition, nextStep }: { competition: TNewCompetiton; setCompetition: Dispatch<SetStateAction<TNewCompetiton>>, nextStep: TVoid }) => {

    return <div className="flex flex-col">
        <h3>Choose competition type</h3>
        <ul>
            {competitionTypes.map(({ type, title, imgUrl }, index) => {
                return <li key={index}>
                    <div onClick={() => setCompetition((_competition) => {
                        return { ..._competition, type }
                    })} className={type === competition.type ? "ring-1 ring-blue-800" : "" + " cursor-pointer"}>
                        <Image alt={title} src={imgUrl} height={100} width={100} />
                        <div className="text-sm text-zinc-200">{title}</div>
                    </div>
                </li>
            })}
        </ul>
        <Button text="Continue" onClick={nextStep} disabled={!competition.type} />
    </div>
}

// Set details
const Step2 = ({ competition, setCompetition, nextStep, prevStep }: { competition: TNewCompetiton; setCompetition: Dispatch<SetStateAction<TNewCompetiton>>, nextStep: TVoid, prevStep: TVoid }) => {
    const ref = useRef<HTMLInputElement>(null);
    return <form>
        <div className="bg-zinc-900/60 hover-bg-zinc-900/30 h-24 w-full rounded-lg cursor-pointer" onClick={() => ref.current!.click()}>
            <input type="file" hidden ref={ref} onChange={(e) => setCompetition((_competition) => {
                return { ..._competition, img: e.target.files ? e.target.files[0] : undefined }
            })} />
        </div>
        <InputText value={competition.name} setValue={(_value) => setCompetition((_competition) => {
            return { ..._competition, name: _value }
        })} placeholder="Name goes here... " />
        <textarea value={competition.description} onChange={(e) => setCompetition((_competition) => {
            return { ..._competition, description: e.target.value }
        })} className="w-full border-none rounded-md bg-zinc-900/60 text-sm text-white mt-4 h-24 p-2" placeholder="Description goes here... "  ></textarea>
        <div className="flex gap-2">
            <Button text="Go back" onClick={prevStep} type="secondary" />
            <Button text="Continue" onClick={nextStep} />
        </div>
    </form>
}

// Complete payment
const Step3 = ({ competition, setCompetition, prevStep }: { competition: TNewCompetiton; setCompetition: Dispatch<SetStateAction<TNewCompetiton>>, prevStep: TVoid }) => {
    const [src, setSrc] = useState("");
    readFile(competition.img!).then((value) => {
        setSrc(value)
    }).catch((e) => {

    })
    return <div className="flex flex-col items-center">
        <div className="h-36 w-36 relative rounded-full bg-blue-800">
            {src && <Image src={src} alt={competition.name} layout="fill" className="rounded-full" />}
        </div>

        <h4 className="text-lg font-semibold text-blue-800">{competition.name}</h4>
        <p className="text-xs text-white mt-4">{competition.description}</p>
        <p className="text-xs text-blue-200 text-center mt-12">By clicking continue, you will be redirected to playstack, where you will pay 5m one time fee to manage this competition for our lifetime.</p>
        <div className="flex gap-2 w-full">
            <Button text="Go back" onClick={prevStep} type="secondary" />
            <Button text="Continue" onClick={() => console.log("")} />
        </div>
    </div>
}