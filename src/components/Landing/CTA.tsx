import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-orange-800 to-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-orange-50 sm:text-xl">
          Join thousands of developers mastering their craft. Get instant access
          to expert-led courses, tutorials, and resources.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/Register"
            className="group  px-8 py-6 text-base font-semibold text-white shadow-2xl shadow-slate-900 transition-all hover:scale-105  "
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <button className="border-2 border-white bg-transparent px-8 py-6 text-base font-semibold text-white transition-all hover:bg-white/10">
            View All Courses
          </button>
        </div>

        <p className="mt-8 text-sm text-orange-100">
          Totaly free • Open to anyone • Easy to get
        </p>
      </div>
    </section>
  );
}
