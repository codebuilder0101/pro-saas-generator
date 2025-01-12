import { Routes } from "@/constants/Routes";

export default function Footer() {
    return (
        <section id="call-to-value" className="py-20 px-2 bg-indigo-600 text-white">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                <button className="mt-6 py-3 px-12 bg-white text-indigo-600 rounded-lg hover:bg-gray-100">
                    <a href={Routes.signin}>
                        Join Sassy Today
                    </a>
                </button>
            </div>
        </section>
    );
}
