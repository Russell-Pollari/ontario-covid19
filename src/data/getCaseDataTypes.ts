/**
 * This file is purely informational. It describes the result payload for the Ontario COVID-19 outcome API.
 */

/**
 * The various field types returned by the API
 */
enum TimestampFields {
  Accurate_Episode_Date = "Accurate_Episode_Date",
  Case_Reported_Date = "Case_Reported_Date",
  Test_Reported_Date = "Test_Reported_Date",
  Specimen_Date = "Specimen_Date",
}

enum NumberFields {
  Row_ID = "Row_ID",
  Reporting_PHU_ID = "Reporting_PHU_ID",
  Reporting_PHU_Latitude = "Reporting_PHU_Latitude",
  Reporting_PHU_Longitude = "Reporting_PHU_Longitude",
}

enum DataStringFields {
  Row_ID = "Row_ID",
  Reporting_PHU_ID = "Reporting_PHU_ID",
  Reporting_PHU_Latitude = "Reporting_PHU_Latitude",
  Reporting_PHU_Longitude = "Reporting_PHU_Longitude",
}

enum EnumStringFields {
  Age_Group = "Age_Group",
  Case_AcquisitionInfo = "Case_AcquisitionInfo",
  Client_Gender = "Client_Gender",
  Outcome1 = "Outcome1",
  Outbreak_Related = "Outbreak_Related",
}

/**
 * Enums used by EnumStringFields
 */
enum AgeGroups {
  Under20 = "<20",
  Over20 = "20s",
  Over30 = "30s",
  Over40 = "40s",
  Over50 = "50s",
  Over60 = "60s",
  Over70 = "70s",
  Over80 = "80s",
  Over90 = "90+",
}

enum OutbreakRelated {
  Yes = "Yes",
  No = "No",
}

enum AcquisitionInfo {
  CC = "CC",
  OB = "OB",
  TRAVEL = "TRAVEL",
  NO_KNOWN_EPI_LINK = "NO KNOWN EPI LINK",
  MISSING_INFORMATION = "MISSING INFORMATION",
  UNSPECIFIED_EPI_LINK = "UNSPECIFIED EPI LINK",
}

enum Outcomes {
  Resolved = "Resolved",
  Fatal = "Fatal",
  NotResolved = "Not Resolved",
}

enum Genders {
  Female = "FEMALE",
  Male = "MALE",
  GenderDiverse = "GENDER DIVERSE",
  Unspecified = "UNSPECIFIED",
}

/**
 * The actual API result
 */
interface ApiResult {
  help: string;
  success: boolean;
  result: {
    include_total: boolean;
    resource_id: "455fd63b-603d-4608-8216-7d8647f43350";
    fields: Array<
      | { type: "int"; id: "_id" }
      | {
          info: { notes: ""; type_override: "timestamp"; label: "" };
          type: "timestamp";
          id: TimestampFields;
        }
      | {
          info: { notes: ""; type_override: ""; label: "" };
          type: "text";
          id: EnumStringFields | DataStringFields;
        }
      | {
          info: { notes: ""; type_override: "numeric"; label: "" };
          type: "numeric";
          id: NumberFields;
        }
    >;
    records_format: "objects";
    records: Array<
      {
        [EnumStringFields.Age_Group]?: AgeGroups;
        [EnumStringFields.Outcome1]?: Outcomes;
        [EnumStringFields.Case_AcquisitionInfo]?: AcquisitionInfo;
        [EnumStringFields.Outbreak_Related]?: OutbreakRelated;
        [EnumStringFields.Client_Gender]?: Genders;
      } & Partial<Record<TimestampFields, string>> &
        Partial<Record<DataStringFields, string>> &
        Partial<Record<NumberFields, number>>
    >;
    limit: number;
    _links: {
      start: string;
      next: string;
    };
    total: number;
  };
}
