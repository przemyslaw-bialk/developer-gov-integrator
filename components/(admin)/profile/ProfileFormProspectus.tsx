import { ProfileType } from "@/types/profile.types";
import {
  inputClassProfile,
  labelClassProfile,
  sectionClassProfile,
} from "./profileForm.styles";

type UserProps = {
  user: ProfileType | null;
};

const ProfileFormProspectus = ({ user }: UserProps) => {
  return (
    <section className={sectionClassProfile}>
      <div className="mb-6 border-b border-border pb-5">
        <h2 className="font-heading text-2xl font-semibold text-text">
          Prospekt informacyjny
        </h2>
        <p className="mt-1 text-xs text-muted">
          Link do prospektu informacyjnego dewelopera
        </p>
      </div>

      <div>
        <label htmlFor="prospectusUrl" className={labelClassProfile}>
          Adres URL prospektu *
        </label>
        <input
          id="prospectusUrl"
          name="prospectusUrl"
          type="string"
          required
          placeholder="www.twoja-strona.pl"
          defaultValue={user?.prospectusUrl ?? ""}
          className={inputClassProfile}
        />
      </div>
    </section>
  );
};

export default ProfileFormProspectus;
