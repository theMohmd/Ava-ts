//link component ui
import { ChainIcon, ClipboardIcon } from "./ui/Icons";
const TranscribeBoxLinkUi = () => {
  return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex p-1 rounded-full border border-cgreen gap-1 ">
                <button className="flex justify-center items-center rounded-full size-8 p-2 bg-cgreen">
                    <ChainIcon />
                </button>
                <input
                    type="text"
                    placeholder="example.com/sample.mp3"
                    className="  text-gray-500 outline-none grow w-1/2"
                />
                <button title="جایگذاری" className="mr-1 text-gray-400">
                    <ClipboardIcon />
                </button>
            </div>
            <p dir="rtl" className="mt-5 text-sm text-gray-400">
                نشانی اینترنتی فایل حاوی (صوتی / تصویری) را وارد و دکمه را فشار
                دهید
            </p>
        </div>
  )
}

export default TranscribeBoxLinkUi
