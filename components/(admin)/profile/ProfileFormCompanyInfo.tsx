import { ProfileType } from "@/types/profile.types";
import {
  inputClassProfile,
  labelClassProfile,
  sectionClassProfile,
} from "./profileForm.styles";

type UserProps = {
  user: ProfileType | null;
};

const ProfileFormCompanyInfo = ({ user }: UserProps) => {
  return (
    <section className={sectionClassProfile}>
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
          <label htmlFor="developerName" className={labelClassProfile}>
            Nazwa dewelopera *
          </label>
          <input
            id="developerName"
            name="developerName"
            type="text"
            required
            placeholder="Nazwa firmy"
            defaultValue={user?.developerName ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="legalFormOfBusiness" className={labelClassProfile}>
            Forma działalności *
          </label>
          <input
            id="legalFormOfBusiness"
            name="legalFormOfBusiness"
            type="text"
            required
            placeholder="Np. Spółka z ograniczoną odpowiedzialnością"
            defaultValue={user?.legalFormOfBusiness ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="vatNumber" className={labelClassProfile}>
            NIP *
          </label>
          <input
            id="vatNumber"
            name="vatNumber"
            type="text"
            required
            placeholder="Numer NIP"
            defaultValue={user?.vatNumber ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="regonNumber" className={labelClassProfile}>
            REGON
          </label>
          <input
            id="regonNumber"
            name="regonNumber"
            type="text"
            placeholder="Numer REGON"
            defaultValue={user?.regonNumber ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="krsNumber" className={labelClassProfile}>
            Numer KRS
          </label>
          <input
            id="krsNumber"
            name="krsNumber"
            type="text"
            placeholder="Numer KRS"
            defaultValue={user?.krsNumber ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="ceidgNumber" className={labelClassProfile}>
            Numer CEIDG
          </label>
          <input
            id="ceidgNumber"
            name="ceidgNumber"
            type="text"
            placeholder="Numer CEIDG"
            defaultValue={user?.ceidgNumber ?? ""}
            className={inputClassProfile}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileFormCompanyInfo;
