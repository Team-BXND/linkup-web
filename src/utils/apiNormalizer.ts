export interface NormalizedMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

type UnknownRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

const toNumber = (value: unknown, fallback: number): number => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
};

const toBoolean = (value: unknown, fallback: boolean): boolean =>
  typeof value === "boolean" ? value : fallback;

const unwrapContainer = (payload: unknown): UnknownRecord => {
  if (!isRecord(payload)) return {};

  const innerData = payload.data;
  if (
    isRecord(innerData) &&
    ("data" in innerData || "meta" in innerData) &&
    !Array.isArray(innerData)
  ) {
    return innerData;
  }

  return payload;
};

export const extractData = <T>(payload: unknown): T | null => {
  const container = unwrapContainer(payload);
  if ("data" in container) return (container.data as T) ?? null;
  return (payload as T) ?? null;
};

export const normalizeMeta = (meta: unknown): NormalizedMeta => {
  const source = isRecord(meta) ? meta : {};

  return {
    total: toNumber(source.total ?? source.totalElements, 0),
    page: toNumber(source.page ?? source.currentPage, 0),
    pageSize: toNumber(source.pageSize, 10),
    totalPages: toNumber(source.totalPages, 0),
    hasNext: toBoolean(source.hasNext, false),
    hasPrevious: toBoolean(source.hasPrevious, false),
  };
};

export const extractPaged = <T>(
  payload: unknown
): { data: T[]; meta: NormalizedMeta } => {
  const container = unwrapContainer(payload);
  const list = Array.isArray(container.data) ? (container.data as T[]) : [];
  return {
    data: list,
    meta: normalizeMeta(container.meta),
  };
};
