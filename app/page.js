import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-gray-900 text-white shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Welcome to AI Mock Interviewer
            </h2>
            <p className="mt-4 text-gray-300">
              Take the first step toward acing your next interview! Sign up
              today to experience the power of AI in your interview preparation.
            </p>
          </div>
          <div className="mt-8 text-center ">
            <Link href="/dashboard">
              <Button className="inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-black">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-900/10 hover:shadow-blue-900/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">
              Ace Your Interviews with AI Mock Interviewer
              </h2>

              <p className="mt-1 text-sm text-gray-300">
              Prepare for your next job interview with our AI Mock Interviewer, designed to help you enhance your interview skills and boost your confidence. Experience realistic interview scenarios that simulate real-world questions, allowing you to practice and refine your responses.
              </p>
            </div>
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-900/10 hover:shadow-blue-900/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">
                Diverse Question Bank
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                With a wide range of questions covering various industries and
                roles, you'll never run out of practice material. From technical
                queries to behavioral questions, our AI Mock Interviewer adapts
                to your needs, ensuring you're well-prepared for any situation.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-900/10 hover:shadow-blue-900/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">
                Simulate Real Interview Conditions
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Engage in time-bound mock interviews to build your stamina and
                focus. Experience the pressure of real interviews in a
                supportive environment that encourages growth and learning.
              </p>
            </div>
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-900/10 hover:shadow-blue-900/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">
                Personalized Feedback
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Receive detailed feedback on your performance, including
                strengths and areas for improvement. Our AI analyzes your
                responses and provides tailored suggestions to help you present
                your best self during interviews.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
