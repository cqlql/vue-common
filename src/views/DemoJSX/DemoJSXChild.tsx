import { ref } from 'vue'

function useSearch() {
  const a = ref('inside')
  console.log(`🚀 -- file: DemoJSXChild.tsx -- line 5 -- useSearch -- a`, a)
  return {
    a,
  }
}

export default function (props: any, { slots }: any) {
  const { a } = useSearch()
  console.log(`🚀 -- file: DemoJSXChild.tsx -- line 14 -- a`, a)

  return (
    <div>
      {props.name}
      <p>{a.value}</p>
      <button onClick={() => (a.value = String(Math.random()))}>inside</button>
    </div>
  )
}
