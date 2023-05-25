export function convertDate(dataISO: string) {
  const data = new Date(dataISO)
  const fusoHorarioAjustado = data.getTimezoneOffset() - 180 // -3 horas em minutos
  data.setMinutes(data.getMinutes() + fusoHorarioAjustado)

  const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const horaFormatada = data.toLocaleTimeString('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
  })

  return `${dataFormatada} | ${horaFormatada}h`
}
