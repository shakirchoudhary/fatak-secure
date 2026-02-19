export function fmtINR(n: number): string {
  return '₹' + Math.round(n).toLocaleString('en-IN')
}

export interface CarCalcInput {
  type: string
  year: number
  cc: number
  policy: string
  ncb: number
  city: string
}

export interface CarCalcResult {
  premium: number
  idv: number
  rangeMin: number
  rangeMax: number
}

export function calcCar(input: CarCalcInput): CarCalcResult | null {
  if (!input.type || !input.year || !input.cc) return null

  const idvBase: Record<string, number> = {
    hatchback: 600000, sedan: 900000, suv: 1300000, luxury: 4000000,
  }
  const dep: Record<number, number> = {
    2025: 0.05, 2024: 0.15, 2023: 0.2, 2022: 0.3, 2021: 0.4, 2020: 0.5,
  }
  const tpBase: Record<number, number> = {
    800: 2094, 1200: 3416, 1800: 7897, 2500: 7897,
  }

  const idv = (idvBase[input.type] || 800000) * (1 - (dep[input.year] || 0.5))
  const tp = tpBase[input.cc] || 3416
  let od = idv * 0.025 * (1 - input.ncb / 100)
  if (input.city === 'metro') od *= 1.1

  let pre = input.policy === 'tp' ? tp : input.policy === 'od' ? od : od + tp
  pre += 500
  const final = pre * 1.18

  return {
    premium: final,
    idv,
    rangeMin: final * 0.8,
    rangeMax: final * 1.3,
  }
}

export interface BikeCalcInput {
  cc: number
  year: number
  policy: string
  ncb: number
}

export interface BikeCalcResult {
  premium: number
  idv: number
  rangeMin: number
  rangeMax: number
}

export function calcBike(input: BikeCalcInput): BikeCalcResult | null {
  if (!input.cc) return null

  const tpMap: Record<number, number> = {
    75: 538, 150: 714, 350: 1366, 500: 2804, 800: 2804,
  }
  const idvBase: Record<number, number> = {
    75: 50000, 150: 75000, 350: 150000, 500: 250000, 800: 500000,
  }
  const dep: Record<number, number> = {
    2025: 0.05, 2024: 0.15, 2023: 0.2, 2022: 0.3, 2021: 0.4,
  }

  const tp = tpMap[input.cc] || 714
  const idv = (idvBase[input.cc] || 80000) * (1 - (dep[input.year] || 0.4))
  let pre = input.policy === 'tp' ? tp : tp + idv * 0.025 * (1 - input.ncb / 100)
  pre += 330
  const final = pre * 1.18

  return {
    premium: final,
    idv,
    rangeMin: final * 0.8,
    rangeMax: final * 1.25,
  }
}

export interface HealthCalcInput {
  plan: string
  age: number
  si: number
  members: number
  ped: string
  city: string
}

export interface HealthCalcResult {
  annual: number
  monthly: number
  rangeMin: number
  rangeMax: number
}

export function calcHealth(input: HealthCalcInput): HealthCalcResult | null {
  if (!input.age || !input.si) return null

  const ageMul: Record<number, number> = {
    25: 1, 35: 1.4, 45: 2.2, 55: 3.5, 65: 5.5, 70: 7,
  }

  let base = 4500 * (ageMul[input.age] || 2) * (input.si / 500000)
  if (input.plan === 'family') base *= 1 + (input.members - 1) * 0.5
  if (input.plan === 'senior') base *= 1.6
  if (input.ped === 'yes') base *= 1.25
  if (input.city === 'metro') base *= 1.15
  if (input.city === 'tier3') base *= 0.9
  const final = base * 1.18

  return {
    annual: final,
    monthly: final / 12,
    rangeMin: final * 0.75,
    rangeMax: final * 1.4,
  }
}
