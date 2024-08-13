import { AccountMenu } from '../accountMenu'
import { AccountSign } from '../accountSign'
import { GlobalSearch } from '../globalSearch'

export const Header = () => {
  return (
    <header className="pl-96 pr-9 py-4">
      <div className="flex items-center justify-between">
        <GlobalSearch />
        <div className="flex items-center gap-2">
          <AccountSign />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
