import { toRefs, watch } from "vue"

function initializeLS(name, reactive){
  const LS_EXISTS = localStorage.getItem(name)
  if(!LS_EXISTS) return localStorage.setItem(name, JSON.stringify({...reactive}))
  const PARSED_LS = JSON.parse(LS_EXISTS)
  for (const key in PARSED_LS) {
    reactive[key] = PARSED_LS[key]
  }
}

export default function (name, reactive) {

  function proxyHandler(nv, ov){
    localStorage.setItem(name, JSON.stringify(nv))
  }

  initializeLS(name,reactive)
  const storage = reactive
  watch(reactive, proxyHandler)

  return reactive
}