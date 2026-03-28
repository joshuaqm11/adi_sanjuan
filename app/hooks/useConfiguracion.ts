import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { ConfiguracionSitio } from '@/app/types'

export function useConfiguracion() {
  const [config, setConfig] = useState<ConfiguracionSitio | null>(null)

  useEffect(() => {
    supabase
      .from('configuracion_sitio')
      .select('*')
      .limit(1)
      .single()
      .then(({ data }) => setConfig(data))
  }, [])

  return config
}