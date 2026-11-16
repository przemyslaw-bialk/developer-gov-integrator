const ProfileFormFooter = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row">
      <p className="text-xs text-muted">Pola oznaczone * są wymagane.</p>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
      >
        Zapisz dane
      </button>
    </div>
  );
};

export default ProfileFormFooter;
