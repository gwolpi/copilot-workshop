// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);

namespace VehicleMagician.Models
{
    public class As //as
    {
        public int wettelijk_toegestane_maximum_aslast { get; set; }
        public string plaatscode_as { get; set; }
        public int technisch_toegestane_maximum_aslast { get; set; }
        public int aantal_assen { get; set; }
        public int as_nummer { get; set; }
        public int spoorbreedte { get; set; }
    }

    public class Brandstof
    {
        public int brandstof_volgnummer { get; set; }
        public string max_vermogen60_minuten { get; set; }
        public int nominaal_continu_maximumvermogen { get; set; }
        public string brandstof_omschrijving { get; set; }
        public string uitlaatemissieniveau { get; set; }
        public int elektrisch_verbruik_enkel_elektrisch_wltp { get; set; }
        public string emissieklasse { get; set; }
        public int geluidsniveau_rijdend { get; set; }
        public int netto_max_vermogen_elektrisch { get; set; }
        public int actie_radius_enkel_elektrisch_wltp { get; set; }
        public string milieuklasse_eg_goedkeuring_licht { get; set; }
        public int actie_radius_enkel_elektrisch_stad_wltp { get; set; }
    }

    public class Carrosserie
    {
        public int carrosserie_volgnummer { get; set; }
        public string carrosserietype { get; set; }
        public string type_carrosserie_europese_omschrijving { get; set; }
    }

    public class Links
    {
        public Self self { get; set; }
    }

    public class Vehicle //vehicle
    {
        public int jaar_laatste_registratie_tellerstand { get; set; }
        public string typegoedkeuringsnummer { get; set; }
        public string datum_eerste_toelating { get; set; }
        public string eerste_kleur { get; set; }
        public string datum_eerste_tenaamstelling_in_nederland { get; set; }
        public string code_toelichting_tellerstandoordeel { get; set; }
        public int maximale_constructiesnelheid { get; set; }
        public int volgnummer_wijziging_eu_typegoedkeuring { get; set; }
        public int breedte { get; set; }
        public string type { get; set; }
        public string europese_voertuigcategorie { get; set; }
        public bool export_indicator { get; set; }
        public bool wam_verzekerd { get; set; }
        public string kenteken { get; set; }
        public int maximum_massa_samenstelling { get; set; }
        public string variant { get; set; }
        public string vervaldatum_apk { get; set; }
        public int toegestane_maximum_massa_voertuig { get; set; }
        public int maximum_trekken_massa_geremd { get; set; }
        public List<Brandstof> brandstof { get; set; }
        public int hoogte_voertuig { get; set; }
        public string merk { get; set; }
        public string kentekenplaat { get; set; }
        public List<Carrosserie> carrosserie { get; set; }
        public string uitvoering { get; set; }
        public bool taxi_indicator { get; set; }
        public string tellerstandoordeel { get; set; }
        public bool openstaande_terugroepactie_indicator { get; set; }
        public int aantal_zitplaatsen { get; set; }
        public int lengte { get; set; }
        public int technische_max_massa_voertuig { get; set; }
        public string voertuigsoort { get; set; }
        public int catalogusprijs { get; set; }
        public string handelsbenaming { get; set; }
        public List<As> @as { get; set; }
        public int massa_rijklaar { get; set; }
        public double vermogen_massarijklaar { get; set; }
        public string inrichting { get; set; }
        public int aantal_wielen { get; set; }
        public string datum_tenaamstelling { get; set; }
        public int massa_ledig_voertuig { get; set; }
        public int maximum_ondersteunende_snelheid { get; set; }
        public bool tenaamstellen_mogelijk { get; set; }
        public int maximum_massa_trekken_ongeremd { get; set; }
        public int wielbasis { get; set; }
        public int sidecode { get; set; }
        public int aantal_deuren { get; set; }
        public Links _links { get; set; }
    }

    public class Self
    {
        public string href { get; set; }
    }
}