import client from '@/config/axios';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

type UserDesktop = {
  id: number;
  email: string | null;
  anydeskId: string;
  walletPublicKey: string;
  timestamp: string;
  setupDone: boolean;
  os: string | null;
};

export default function AdminPanel() {
  const [authorized, setAuthorized] = useState(false);
  const [nextDesktop, setNextDesktop] = useState<UserDesktop | null>(null);
  const [allDesktops, setAllDesktops] = useState<UserDesktop[]>([]);
  const [loading, setLoading] = useState(false);
  const [editedEmail, setEditedEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const password = window.prompt('Enter admin password');
    if (password === 'depinsio123') {
      setAuthorized(true);
      fetchNextDesktop();
      fetchAllDesktops();
    } else {
      alert('Unauthorized');
    }
  }, []);

  const fetchNextDesktop = async () => {
    try {
      const { data } = await client.get('admin/get-next-desktop');
      setNextDesktop(data);
      setEditedEmail(data?.email || '');
      setEmailError('');
    } catch (err) {
      console.error('Failed to fetch next desktop:', err);
    }
  };

  const fetchAllDesktops = async () => {
    try {
      const { data } = await client.get('admin/get-all-desktops');
      setAllDesktops(data);
    } catch (err) {
      console.error('Failed to fetch all desktops:', err);
    }
  };

  const markAsDone = async () => {
    if (!nextDesktop) return;

    if (!editedEmail.trim()) {
      setEmailError('Email is required before marking as done.');
      return;
    }

    setLoading(true);
    setEmailError('');

    try {
      const query = new URLSearchParams({
        anydeskId: nextDesktop.anydeskId,
        email: editedEmail.trim(),
      }).toString();
      await client.get(`admin/mark-desktop-done?${query}`);
      alert('Marked as done!');
      await fetchNextDesktop();
      await fetchAllDesktops();
    } catch (err) {
      console.error('Error marking desktop as done:', err);
    }

    setLoading(false);
  };

  if (!authorized) return null;

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <section className="mb-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold mb-3">Next Desktop to setup</h2>
          <Button onClick={fetchNextDesktop}>Refresh</Button>
        </div>
        {nextDesktop ? (
          <div className="border border-gray-300 rounded p-4 bg-white shadow text-gray-800">
            <p>
              <strong>ID:</strong> {nextDesktop.id}
            </p>
            <p>
              <strong>Anydesk ID:</strong> {nextDesktop.anydeskId}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <input
                type="email"
                value={editedEmail}
                onChange={e => setEditedEmail(e.target.value)}
                className="border border-gray-300 p-1 rounded w-full mt-1"
                placeholder="Enter email"
              />
            </p>
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
            <p>
              <strong>Wallet:</strong> {nextDesktop.walletPublicKey}
            </p>
            <p>
              <strong>OS:</strong> {nextDesktop.os || 'Unknown'}
            </p>
            <p>
              <strong>Timestamp:</strong>{' '}
              {new Date(nextDesktop.timestamp).toLocaleString()}
            </p>
            <button
              onClick={markAsDone}
              disabled={loading}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              {loading ? 'Marking...' : 'Mark as Done'}
            </button>
          </div>
        ) : (
          <p className="text-white-600">No desktops pending setup.</p>
        )}
      </section>

      <section className="mb-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold mb-3">All Desktops</h2>
          <Button onClick={fetchAllDesktops}>Refresh</Button>
        </div>
        <div className="overflow-auto rounded shadow">
          <table className="w-full text-sm text-left border-collapse bg-white text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Anydesk ID</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Wallet</th>
                <th className="p-3 border">OS</th>
                <th className="p-3 border">Setup Done</th>
                <th className="p-3 border">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {allDesktops.map(d => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{d.id}</td>
                  <td className="p-3 border">{d.anydeskId}</td>
                  <td className="p-3 border">{d.email || 'N/A'}</td>
                  <td className="p-3 border">{d.walletPublicKey}</td>
                  <td className="p-3 border">{d.os || 'N/A'}</td>
                  <td className="p-3 border">{d.setupDone ? 'Yes' : 'No'}</td>
                  <td className="p-3 border">
                    {new Date(d.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <h2 className="text-xl font-bold mb-3 text-yellow-800">
          How to Setup Each Desktop
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-yellow-900">
          <li>
            Download AnyDesk{' '}
            <a
              href="https://anydesk.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline">
              https://anydesk.com/en
            </a>
          </li>
          <li>
            Connect to each available <strong>Anydesk ID</strong> shown above
            one by one.
          </li>
          <li>
            If prompted for password (Windows/Linux), use the user's{' '}
            <code>walletPublicKey</code> as the password. For Mac, the user must
            manually approve your connection.
          </li>
          <li>
            Once connected:
            <ul className="list-disc ml-6">
              <li>
                Use <strong>tempmail</strong> to generate a new email address
                for the user.
              </li>
              <li>
                Authenticate <strong>Grass</strong> using the generated temp
                email. (Buy tempmail – 3-day free trial, cancel after 2 days.)
              </li>
              <li>
                Install Grass and login with the temp email (
                <a
                  href="https://grass.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline">
                  grass.io
                </a>
                ).
              </li>
              <li>
                Install Phantom and import wallet using private key from{' '}
                <a
                  href="https://depins.io/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline">
                  depins.io/download
                </a>
                .
              </li>
              <li>
                Paste the email used into the database and mark{' '}
                <code>setupDone</code> as true.
              </li>
            </ul>
          </li>
          <li>
            After setup is complete, disconnect from the user's machine and
            proceed to the next one.
          </li>
        </ol>
        <p className="mt-4 text-sm">
          📚 For full documentation and latest updates, visit:{' '}
          <a
            href="https://docs.google.com/document/d/1-fyOHTuV-N8YACabqpihZM6_KCm9wSvgX1qTZqSw8tI/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline">
            https://docs.google.com/document/d/1-fyOHTuV-N8YACabqpihZM6_KCm9wSvgX1qTZqSw8tI/edit?tab=t.0
          </a>
        </p>
      </section>
    </div>
  );
}
