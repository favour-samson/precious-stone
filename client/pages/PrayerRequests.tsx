import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Send, Loader2, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";

const DEPT_OPTIONS = ["General", "Health & Healing", "Family", "Finance", "Relationships", "Career", "Spiritual Growth", "Other"];

export default function PrayerRequests() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    request: "",
    isAnonymous: false,
    isUrgent: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.request.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSubmitted(true);
      toast.success("Your prayer request has been submitted. We are praying with you!");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setForm({ name: "", email: "", request: "", isAnonymous: false, isUrgent: false });
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-72 bg-gradient-to-r from-gray-900 to-primary/80 text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Heart size={40} className="mx-auto mb-4 text-white/80" />
          <h1 className="text-5xl font-serif font-bold mb-3">Prayer Requests</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Submit your prayer request and let our prayer team intercede with you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-4">How We Pray</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Every request is prayed over by our dedicated prayer team",
                    "Urgent requests receive immediate attention",
                    "Anonymous requests are kept fully confidential",
                    "We pray weekly during our corporate prayer meetings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <ShieldCheck size={24} className="text-primary mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Confidential & Safe</h4>
                <p className="text-sm text-gray-600">
                  All prayer requests are handled with the utmost care and confidentiality. Only our prayer team sees your request.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <Zap size={24} className="text-yellow-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Urgent Requests</h4>
                <p className="text-sm text-gray-600">
                  Mark your request as urgent and our prayer team will intercede immediately — within hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Prayer Received!</h3>
                    <p className="text-gray-600 max-w-sm">
                      Your request has been submitted. Our prayer team will be interceding on your behalf. God hears every prayer!
                    </p>
                    <button
                      onClick={reset}
                      className="mt-4 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Share Your Prayer Request</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Anonymous toggle */}
                      <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border cursor-pointer hover:bg-gray-100 transition">
                        <input
                          type="checkbox"
                          checked={form.isAnonymous}
                          onChange={(e) => set("isAnonymous", e.target.checked)}
                          className="w-4 h-4 accent-primary"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Submit Anonymously</p>
                          <p className="text-xs text-gray-500">Your name and email won't be stored</p>
                        </div>
                      </label>

                      {/* Name & Email */}
                      {!form.isAnonymous && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) => set("name", e.target.value)}
                              placeholder="e.g. John Adeleke"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => set("email", e.target.value)}
                              placeholder="you@example.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                          </div>
                        </div>
                      )}

                      {/* Request */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Your Prayer Request <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={6}
                          required
                          value={form.request}
                          onChange={(e) => set("request", e.target.value)}
                          placeholder="Share what you'd like us to pray about. Be as specific or general as you're comfortable with..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        />
                        <p className="text-xs text-gray-400 mt-1 text-right">{form.request.length} characters</p>
                      </div>

                      {/* Urgent */}
                      <label className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200 cursor-pointer hover:bg-yellow-100 transition">
                        <input
                          type="checkbox"
                          checked={form.isUrgent}
                          onChange={(e) => set("isUrgent", e.target.checked)}
                          className="w-4 h-4 accent-yellow-500"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">⚡ Mark as Urgent</p>
                          <p className="text-xs text-gray-500">Our prayer team will intercede immediately</p>
                        </div>
                      </label>

                      <button
                        type="submit"
                        disabled={loading || !form.request.trim()}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                        {loading ? "Submitting..." : "Submit Prayer Request"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
