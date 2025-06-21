import client from "@/config/axios";
import { useEffect, useState } from "react";
import FancyCharts from "../molecules/FancyCharts";

const blocks = [
  {
    block: "6263849",
    hash: "0xc7fd...e55a",
    age: "8s ago",
    transactions: 7,
    fee: "0.0014 AVAX",
  },
  {
    block: "6263848",
    hash: "0x69a1...941a",
    age: "9s ago",
    transactions: 1,
    fee: "0.0002 AVAX",
  },
  {
    block: "6263847",
    hash: "0x1065...4153",
    age: "10s ago",
    transactions: 26,
    fee: "0.0068 AVAX",
  },
  {
    block: "6263846",
    hash: "0x730d...9796",
    age: "11s ago",
    transactions: 5,
    fee: "0.0049 AVAX",
  },
  {
    block: "6263845",
    hash: "0xcc58...159e5",
    age: "12s ago",
    transactions: 3,
    fee: "0.0011 AVAX",
  },
  {
    block: "6263844",
    hash: "0x90ba...3bf3",
    age: "13s ago",
    transactions: 4,
    fee: "0.0107 AVAX",
  },
  {
    block: "6263843",
    hash: "0xae2e...eb01",
    age: "14s ago",
    transactions: 4,
    fee: "0.0003 AVAX",
  },
  {
    block: "6263842",
    hash: "0x70f8...c1d5",
    age: "15s ago",
    transactions: 6,
    fee: "0.0014 AVAX",
  },
  {
    block: "6263841",
    hash: "0xffb1...3b2f",
    age: "16s ago",
    transactions: 9,
    fee: "0.0112 AVAX",
  },
  {
    block: "6263840",
    hash: "0x985a...74a2",
    age: "17s ago",
    transactions: 2,
    fee: "0.0003 AVAX",
  },
];

const transactions = [
  {
    txHash: "0xc7fd...e55a",
    from: "0x13fd4...9a5b",
    to: "0xefc...2baf",
    age: "9s ago",
    value: "96.2090 AVAX",
  },
  {
    txHash: "0x69a1...941a",
    from: "0x15663...13731",
    to: "0x2d8d...b95a",
    age: "10s ago",
    value: "94.3916 AVAX",
  },
  {
    txHash: "0x10659...14153",
    from: "0xd8cc...1399",
    to: "0x17582...89d2",
    age: "11s ago",
    value: "0.0001 AVAX",
  },
  {
    txHash: "0x730d...9796",
    from: "0x12298...7dd",
    to: "0x11ba9...36d6",
    age: "12s ago",
    value: "0.0001 AVAX",
  },
  {
    txHash: "0xcc58...159e5",
    from: "0xa6e3...11b65",
    to: "0xd9e0...dc57",
    age: "13s ago",
    value: "81.7269 AVAX",
  },
  {
    txHash: "0x90ba...3bf3",
    from: "0x0e38...fa05",
    to: "0x88e3...0c21",
    age: "14s ago",
    value: "0.0000 AVAX",
  },
  {
    txHash: "0xae2e...eb01",
    from: "0xaec9...f3f4",
    to: "0x1389...83c9",
    age: "15s ago",
    value: "25.1882 AVAX",
  },
  {
    txHash: "0x70f8...c1d5",
    from: "0xc059...11a5",
    to: "0x011a...f58e",
    age: "16s ago",
    value: "0.0000 AVAX",
  },
  {
    txHash: "0xffb1...3b2f",
    from: "0x605...0661",
    to: "0xe52...3cb8",
    age: "17s ago",
    value: "0.0001 AVAX",
  },
  {
    txHash: "0x985a...74a2",
    from: "0xa0ed...a981",
    to: "0xd31...fd23",
    age: "18s ago",
    value: "0.0000 AVAX",
  },
];

export default function Analytics() {
  const [summary, setSummary] = useState<any>(null);

  const [nodes, setNodes] = useState<any[]>([]);

  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    client
      .get("flux-node/stats")
      .then((response) => {
        console.log("Flux Node Stats:", response.data);

        setSummary(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Flux Node stats:", error);
      });
  }, []);

  useEffect(() => {
    client
      .get("flux-node")
      .then((response) => {
        console.log("flux-node:", response.data);
        setNodes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Flux Node:", error);
      });
  }, []);

  useEffect(() => {
    client
      .get("analytics/dashboard")
      .then((response) => {
        console.log("analytics ", response.data);
        if (response.data && response.data.transactions) {
          setTransactions(response.data.transactions);
        }
      })
      .catch((error) => {
        console.error("Error fetching analytics/dashboard:", error);
      });
  }, []);

  const cards = summary
    ? [
        {
          title: "Total Nodes",
          value: summary.totalNodes.toString(),
        },
        {
          title: "Flux Accumulated",
          value: `$${summary.totalFluxAccumulated.toLocaleString()}`,
        },
        {
          title: "Flux Converted",
          value: `$${summary.totalFluxConverted.toLocaleString()}`,
        },
        {
          title: "AVAX Staked",
          value: `$${summary.totalAvaxStaked.toLocaleString()}`,
        },
        {
          title: "AVAX Withdrawn",
          value: `$${summary.totalAvaxWithdrawn.toLocaleString()}`,
        },
      ]
    : [];

  return (
    <div className="bg-[#01081E] min-h-screen w-full">
      {/* Gradient header - full width */}
      <div className="w-full from-[#071325] via-[#01081E] to-black py-16">
        <div className="mx-auto px-8">
          <h1 className="text-white text-3xl font-extrabold font-inter tracking-tight">
            InfraStaking
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            An onchain compliance layer for DePIN InfraStaking
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mx-auto px-8 py-0 pb-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {summary === null ? (
            <>
              <div className="lg:col-span-1">
                <InfoCardSkeleton />
              </div>
              <div className="lg:col-span-1">
                <InfoCardSkeleton />
              </div>
              <div className="lg:col-span-1">
                <InfoCardSkeleton />
              </div>
              <div className="lg:col-span-1">
                <InfoCardSkeleton />
              </div>
              <div className="lg:col-span-1">
                <InfoCardSkeleton />
              </div>
            </>
          ) : (
            <>
              {cards[0] && (
                <div className="lg:col-span-1">
                  <InfoCard {...cards[0]} />
                </div>
              )}
              {cards[1] && (
                <div className="lg:col-span-1">
                  <InfoCard {...cards[1]} />
                </div>
              )}
              {cards[2] && (
                <div className="lg:col-span-1">
                  <InfoCard {...cards[2]} />
                </div>
              )}
              {cards[3] && (
                <div className="lg:col-span-1">
                  <InfoCard {...cards[3]} />
                </div>
              )}
              {cards[4] && (
                <div className="lg:col-span-1">
                  <InfoCard {...cards[4]} />
                </div>
              )}
            </>
          )}
        </div>

        <FancyCharts loading={summary === null} />

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {nodes.length === 0 ? (
            <TableSkeleton title="Latest Nodes" />
          ) : (
            <NodesTable data={nodes} />
          )}
          {transactions.length === 0 ? (
            <TableSkeleton title="Latest Transactions" />
          ) : (
            <TransactionsTable data={transactions} />
          )}
        </div>
      </div>
    </div>
  );
}
function InfoCard({
  title,
  value,
  subtext,
  highlight,
}: {
  title: string;
  value: string;
  subtext?: string;
  highlight?: string;
}) {
  return (
    <div className="bg-[#0a1225] rounded-2xl px-6 py-4 shadow border border-[#1c2940]">
      <h4 className="text-zinc-300 text-md mb-1">{title}</h4>
      <div className="text-white text-4xl font-bold tracking-tight flex items-center gap-2">
        {value}
        {highlight && (
          <span className="text-red-500 text-sm font-medium">{highlight}</span>
        )}
      </div>
      {subtext && <p className="text-zinc-400 text-xs mt-1">{subtext}</p>}
    </div>
  );
}

function InfoCardSkeleton() {
  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 shadow border border-[#1c2940] animate-pulse space-y-3">
      <div className="h-4 w-1/3 bg-[#1c2940] rounded" />
      <div className="h-8 w-2/3 bg-[#2a3b58] rounded" />
      <div className="h-3 w-1/2 bg-[#1c2940] rounded" />
    </div>
  );
}

// components/BlocksTable.tsx

function NodesTable({ data }: { data: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 overflow-hidden border border-[#1c2940]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-lg">Active Nodes</h3>
      </div>

      {/* Make table horizontally scrollable on small screens */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-zinc-300">
          <thead className="text-zinc-400 border-b border-[#1c2940]">
            <tr>
              <th className="py-2 text-left whitespace-nowrap">Node ID</th>
              <th className="py-2 text-left whitespace-nowrap">Joined</th>
              <th className="py-2 text-left whitespace-nowrap">Wallet</th>
              <th className="py-2 text-left whitespace-nowrap">IP Address</th>
              <th className="py-2 text-left whitespace-nowrap">
                Flux Accumulated
              </th>
              <th className="py-2 text-left whitespace-nowrap">
                Flux Converted
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((node, idx) => (
              <tr
                key={idx}
                className="border-b border-[#1a2338] hover:bg-[#101b33]"
              >
                <td className="py-2 whitespace-nowrap">{node.id}</td>
                <td className="py-2 whitespace-nowrap">
                  {new Date(node.dateJoined).toLocaleDateString()}
                </td>
                <td className="py-2 text-blue-400 cursor-pointer whitespace-nowrap">
                  <div className="relative group">
                    <span className="text-blue-400 cursor-pointer whitespace-nowrap">
                      {truncateWallet(node.walletPublicKey)}
                    </span>
                    <div className="absolute z-10 hidden group-hover:block bg-[#0f1a2d] text-xs text-white rounded px-2 py-1 mt-1 left-0 whitespace-nowrap border border-[#2a3b58]">
                      {node.walletPublicKey}
                    </div>
                  </div>
                </td>
                <td className="py-2 whitespace-nowrap">{node.nodeIp}</td>
                <td className="py-2 whitespace-nowrap">
                  ${node.fluxAccumulated}
                </td>
                <td className="py-2 whitespace-nowrap">
                  ${node.fluxConverted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4 text-sm text-white">
          <button
            className="px-3 py-1 rounded hover:bg-[#1c2940] disabled:opacity-40"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀
          </button>

          <span className="px-3 py-1 bg-[#1c2940] rounded">
            {currentPage} of {totalPages}
          </span>

          <button
            className="px-3 py-1 rounded hover:bg-[#1c2940] disabled:opacity-40"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
// components/TransactionsTable.tsx
function TransactionsTable({ data }: { data: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 overflow-hidden border border-[#1c2940]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-lg">
          Latest Transactions
        </h3>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-zinc-300">
          <thead className="text-zinc-400 border-b border-[#1c2940]">
            <tr>
              <th className="py-2 text-left whitespace-nowrap">Type</th>
              <th className="py-2 text-left whitespace-nowrap">Amount</th>
              <th className="py-2 text-left whitespace-nowrap">Description</th>
              <th className="py-2 text-left whitespace-nowrap">View</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((tx, idx) => (
              <tr
                key={idx}
                className="border-b border-[#1a2338] hover:bg-[#101b33]"
              >
                <td className="py-2 whitespace-nowrap">{tx.type}</td>
                <td className="py-2 whitespace-nowrap">
                  <span>${tx.amount}</span>
                </td>
                <td className="py-2 whitespace-nowrap">{tx.description}</td>
                <td className="py-2 whitespace-nowrap">
                  <a
                    href={`https://solscan.io/tx/${tx.signature}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Tx
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4 text-sm text-white">
          <button
            className="px-3 py-1 rounded hover:bg-[#1c2940] disabled:opacity-40"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ◀
          </button>

          <span className="px-3 py-1 bg-[#1c2940] rounded">
            {currentPage} of {totalPages}
          </span>

          <button
            className="px-3 py-1 rounded hover:bg-[#1c2940] disabled:opacity-40"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

// components/TableSkeleton.tsx
function TableSkeleton({ title }: { title: string }) {
  return (
    <div className="bg-[#0a1225] rounded-2xl p-4 space-y-4 animate-pulse border border-[#1c2940]">
      <div className="flex justify-between items-center">
        <div className="h-5 w-1/3 bg-[#1c2940] rounded" />
        <div className="h-4 w-24 bg-[#1c2940] rounded" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-6 bg-[#2a3b58] rounded"
            style={{ width: `${80 + Math.random() * 10}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function truncateWallet(address: string, start = 6, end = 4): string {
  if (!address || address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}
