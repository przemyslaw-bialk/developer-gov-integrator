import { ProfileType } from "@/types/profile.types";
import {
  inputClassProfile,
  labelClassProfile,
  sectionClassProfile,
} from "./profileForm.styles";

type UserProps = {
  user: ProfileType | null;
};

const ProfileFormContactInfo = ({ user }: UserProps) => {
  return (
    <section className={sectionClassProfile}>
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
          <label htmlFor="phoneNumber" className={labelClassProfile}>
            Telefon *
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
            placeholder="+48 000 000 000"
            defaultValue={user?.phoneNumber ?? ""}
            className={inputClassProfile}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClassProfile}>
            Adres e-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="kontakt@firma.pl"
            defaultValue={user?.email ?? ""}
            className={inputClassProfile}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileFormContactInfo;
