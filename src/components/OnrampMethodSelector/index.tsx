import { Card, CardContent } from '@/components/ui/card';

type OnrampMethod = 'web3auth' | 'gnosis';

type OnrampMethodSelectorProps = {
  selectedMethod: OnrampMethod;
  onMethodChange: (method: OnrampMethod) => void;
};

export function OnrampMethodSelector({
  selectedMethod,
  onMethodChange,
}: OnrampMethodSelectorProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm font-medium mb-3">Fiat Onramp Method</p>
        <div className="flex space-x-2">
          {['web3auth', 'gnosis'].map((method) => (
            <button
              key={method}
              onClick={() => onMethodChange(method as OnrampMethod)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                selectedMethod === method
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {method === 'web3auth' ? 'Web3Auth' : 'Gnosis'}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
