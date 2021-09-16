export const enumerate = (arr, emoji) =>(arr?arr.map(e =><div className="txtVal" key={e}>{`${emoji}  ${e} `}</div>):"")
