import {
  createProfileInfoAction,
  getUserProfileInfoAction,
} from "@/actions/profile.actions";
import SectionHeader from "@/components/ui/SectionHeader";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition placeholder:text-subtle hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/10";

const labelClass = "mb-2 block text-sm font-medium text-text";

const sectionClass = "rounded-xl border border-border bg-surface p-6 shadow-sm";

const ProfileForm = async () => {
  const user = await getUserProfileInfoAction();

  return (
    <form
      action={createProfileInfoAction}
      className="mx-auto w-full space-y-6 "
    >
      {/* Header */}
      <div className="mb-8">
        <SectionHeader>Profil Dewelopera</SectionHeader>

        <p className="mt-2 text-sm text-muted">
          Zarządzaj danymi swojej firmy, danymi kontaktowymi oraz informacjami
          wymaganymi do publikacji inwestycji.
        </p>
      </div>

      {/* Company information */}
      <section className={sectionClass}>
        <div className="mb-6 border-b border-border pb-5">
          <h2 className="font-heading text-2xl font-semibold text-text">
            Informacje o firmie
          </h2>
          <p className="mt-1 text-xs text-muted">
            Podstawowe informacje identyfikujące dewelopera
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="developerName" className={labelClass}>
              Nazwa dewelopera *
            </label>
            <input
              id="developerName"
              name="developerName"
              type="text"
              required
              placeholder="Nazwa firmy"
              defaultValue={user?.developerName ?? ""}
              className={inputClass}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="legalFormOfBusiness" className={labelClass}>
              Forma działalności *
            </label>
            <input
              id="legalFormOfBusiness"
              name="legalFormOfBusiness"
              type="text"
              required
              placeholder="Np. Spółka z ograniczoną odpowiedzialnością"
              defaultValue={user?.legalFormOfBusiness ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="vatNumber" className={labelClass}>
              NIP *
            </label>
            <input
              id="vatNumber"
              name="vatNumber"
              type="text"
              required
              placeholder="Numer NIP"
              defaultValue={user?.vatNumber ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="regonNumber" className={labelClass}>
              REGON
            </label>
            <input
              id="regonNumber"
              name="regonNumber"
              type="text"
              placeholder="Numer REGON"
              defaultValue={user?.regonNumber ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="krsNumber" className={labelClass}>
              Numer KRS
            </label>
            <input
              id="krsNumber"
              name="krsNumber"
              type="text"
              placeholder="Numer KRS"
              defaultValue={user?.krsNumber ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="ceidgNumber" className={labelClass}>
              Numer CEIDG
            </label>
            <input
              id="ceidgNumber"
              name="ceidgNumber"
              type="text"
              placeholder="Numer CEIDG"
              defaultValue={user?.ceidgNumber ?? ""}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className={sectionClass}>
        <div className="mb-6 border-b border-border pb-5">
          <h2 className="font-heading text-2xl font-semibold text-text">
            Dane kontaktowe
          </h2>
          <p className="mt-1 text-xs text-muted">
            Dane kontaktowe do Twojej działalności
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="phoneNumber" className={labelClass}>
              Telefon *
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              placeholder="+48 000 000 000"
              defaultValue={user?.phoneNumber ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Adres e-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="kontakt@firma.pl"
              defaultValue={user?.email ?? ""}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* Address */}
      <section className={sectionClass}>
        <div className="mb-6 border-b border-border pb-5">
          <h2 className="font-heading text-2xl font-semibold text-text">
            Adres działalności
          </h2>
          <p className="mt-1 text-xs text-muted">
            Adres prowadzenia działalności gospodarczej
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="developerCity" className={labelClass}>
              Miejscowość *
            </label>
            <input
              id="developerCity"
              name="developerCity"
              type="text"
              required
              placeholder="Miejscowość"
              defaultValue={user?.developerCity ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerPostalCode" className={labelClass}>
              Kod pocztowy *
            </label>
            <input
              id="developerPostalCode"
              name="developerPostalCode"
              type="text"
              required
              placeholder="00-000"
              defaultValue={user?.developerPostalCode ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerStreetName" className={labelClass}>
              Ulica *
            </label>
            <input
              id="developerStreetName"
              name="developerStreetName"
              type="text"
              required
              placeholder="Nazwa ulicy"
              defaultValue={user?.developerStreetName ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerStreetNumber" className={labelClass}>
              Numer budynku *
            </label>
            <input
              id="developerStreetNumber"
              name="developerStreetNumber"
              type="text"
              required
              placeholder="Numer budynku"
              defaultValue={user?.developerStreetNumber ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerProvince" className={labelClass}>
              Województwo *
            </label>
            <input
              id="developerProvince"
              name="developerProvince"
              type="text"
              required
              placeholder="Województwo"
              defaultValue={user?.developerProvince ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerCounty" className={labelClass}>
              Powiat *
            </label>
            <input
              id="developerCounty"
              name="developerCounty"
              type="text"
              required
              placeholder="Powiat"
              defaultValue={user?.developerCounty ?? ""}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="developerMunicipality" className={labelClass}>
              Gmina *
            </label>
            <input
              id="developerMunicipality"
              name="developerMunicipality"
              type="text"
              required
              placeholder="Gmina"
              defaultValue={user?.developerMunicipality ?? ""}
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* Prospectus */}
      <section className={sectionClass}>
        <div className="mb-6 border-b border-border pb-5">
          <h2 className="font-heading text-2xl font-semibold text-text">
            Prospekt informacyjny
          </h2>
          <p className="mt-1 text-xs text-muted">
            Link do prospektu informacyjnego dewelopera
          </p>
        </div>

        <div>
          <label htmlFor="prospectusUrl" className={labelClass}>
            Adres URL prospektu *
          </label>
          <input
            id="prospectusUrl"
            name="prospectusUrl"
            type="string"
            required
            placeholder="www.twoja-strona.pl"
            defaultValue={user?.prospectusUrl ?? ""}
            className={inputClass}
          />
        </div>
      </section>

      {/* Footer */}
      <div className="flex flex-col-reverse items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5 sm:flex-row">
        <p className="text-xs text-muted">Pola oznaczone * są wymagane.</p>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
        >
          Zapisz dane
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
