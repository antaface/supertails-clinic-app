import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FileText, Download, Share2, Eye, Paperclip } from 'lucide-react';
import { medicalRecords } from '../data/mockData';

export const Records: React.FC = () => {
  const handleView = (recordId: string) => {
    alert(`Viewing record ${recordId}`);
  };

  const handleDownload = (recordId: string) => {
    alert(`Downloading record ${recordId}`);
  };

  const handleShare = (recordId: string) => {
    alert(`Share options for record ${recordId}`);
  };

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-green-800">
            All your pet's medical records in one place. View, download, or share with other vets.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {medicalRecords.map((record) => (
          <Card key={record.id}>
            <div className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{record.type}</h3>
                  <p className="text-sm text-gray-500">
                    {record.petName} • {new Date(record.date).toLocaleDateString()}
                  </p>
                </div>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
              
              <p className="text-sm text-gray-600 mt-2">
                {record.description}
              </p>

              {record.attachments.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {record.attachments.length} attachment{record.attachments.length > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleView(record.id)}
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownload(record.id)}
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleShare(record.id)}
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {medicalRecords.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No medical records found</p>
        </div>
      )}
    </div>
  );
};