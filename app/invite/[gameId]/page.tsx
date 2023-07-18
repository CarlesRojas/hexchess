interface InviteProps {
  params: { gameId: string }
}

export default function Invite({ params }: InviteProps) {
  console.log(params.gameId)
  return <>Invite page: {params.gameId}</>
}
