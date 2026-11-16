import { ProfileType } from "@/types/profile.types";
import {
  inputClassProfile,
  labelClassProfile,
  sectionClassProfile,
} from "./profileForm.styles";

type UserProps = {
  user: ProfileType | null;
};

const ProfileFormAddress = ({ user }: UserProps) => {
  return (
    <section className={sectionClassProfile}>
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
          <label htmlFor="developerCity" className={labelClassProfile}>
            Miejscowość *
          </label>
          <input
            id="developerCity"
            name="developerCity"
            type="text"
            required
            placeholder="Miejscowość"
            defaultValue={user?.developerCity ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerPostalCode" className={labelClassProfile}>
            Kod pocztowy *
          </label>
          <input
            id="developerPostalCode"
            name="developerPostalCode"
            type="text"
            required
            placeholder="00-000"
            defaultValue={user?.developerPostalCode ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerStreetName" className={labelClassProfile}>
            Ulica *
          </label>
          <input
            id="developerStreetName"
            name="developerStreetName"
            type="text"
            required
            placeholder="Nazwa ulicy"
            defaultValue={user?.developerStreetName ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerStreetNumber" className={labelClassProfile}>
            Numer budynku *
          </label>
          <input
            id="developerStreetNumber"
            name="developerStreetNumber"
            type="text"
            required
            placeholder="Numer budynku"
            defaultValue={user?.developerStreetNumber ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerProvince" className={labelClassProfile}>
            Województwo *
          </label>
          <input
            id="developerProvince"
            name="developerProvince"
            type="text"
            required
            placeholder="Województwo"
            defaultValue={user?.developerProvince ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerCounty" className={labelClassProfile}>
            Powiat *
          </label>
          <input
            id="developerCounty"
            name="developerCounty"
            type="text"
            required
            placeholder="Powiat"
            defaultValue={user?.developerCounty ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="developerMunicipality" className={labelClassProfile}>
            Gmina *
          </label>
          <input
            id="developerMunicipality"
            name="developerMunicipality"
            type="text"
            required
            placeholder="Gmina"
            defaultValue={user?.developerMunicipality ?? ""}
            className={inputClassProfile}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileFormAddress;
