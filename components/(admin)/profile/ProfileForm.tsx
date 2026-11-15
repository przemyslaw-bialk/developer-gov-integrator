import { createProfileInfoAction } from "@/actions/profile.actions";

const ProfileForm = async () => {
  return (
    <form action={createProfileInfoAction}>
      <div>
        <label htmlFor="developerName">Nazwa dewelopera</label>
        <input
          id="developerName"
          name="developerName"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="legalFormOfBusiness">Forma działalności</label>
        <input
          id="legalFormOfBusiness"
          name="legalFormOfBusiness"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="krsNumber">Numer KRS</label>
        <input
          id="krsNumber"
          name="krsNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="ceidgNumber">Numer CEIDG</label>
        <input
          id="ceidgNumber"
          name="ceidgNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="vatNumber">NIP</label>
        <input
          id="vatNumber"
          name="vatNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="regonNumber">REGON</label>
        <input
          id="regonNumber"
          name="regonNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Telefon</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="email">Mail</label>
        <input
          id="email"
          name="email"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerCity">
          Miejscowość, w której jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerCity"
          name="developerCity"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerPostalCode">
          Kod pocztowy miejscowości, w której jest prowadzona działalność
          gospodarcza
        </label>
        <input
          id="developerPostalCode"
          name="developerPostalCode"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerStreetName">
          Nazwa ulicy, w której jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerStreetName"
          name="developerStreetName"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerStreetNumber">
          Numer ulicy, w której jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerStreetNumber"
          name="developerStreetNumber"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="prospectusUrl">
          Adres URL, pod którym jest dostępny prospekt informacyjny
        </label>
        <input
          id="prospectusUrl"
          name="prospectusUrl"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerProvince">
          Województwo, w którym jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerProvince"
          name="developerProvince"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerCounty">
          Powiat, w którym jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerCounty"
          name="developerCounty"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <div>
        <label htmlFor="developerMunicipality">
          Gmina, w której jest prowadzona działalność gospodarcza
        </label>
        <input
          id="developerMunicipality"
          name="developerMunicipality"
          type="text"
          required
          className="bg-red-300"
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-primary px-4 py-2 text-white"
      >
        Zapisz
      </button>
    </form>
  );
};

export default ProfileForm;
