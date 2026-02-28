export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#dbe3f5] bg-white p-8 text-center shadow-[0_12px_35px_rgba(40,66,134,0.08)]">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#dbe3f5] border-t-[#3a3fe0]" />
        <h2 className="mt-5 text-xl font-extrabold text-[#1f2a44]">Loading QuickHire</h2>
        <p className="mt-2 text-sm text-[#8e99b1]">Please wait while we fetch the latest data.</p>
      </div>
    </div>
  );
}
