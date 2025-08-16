import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Activity, Download, Eye, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { diagnosticReports } from '../data/mockData';

export const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleViewReport = (reportId: string) => {
    setSelectedReport(reportId);
  };

  return (
    <div className="p-4 pb-20">
      <div className="mb-6">
        <Card className="bg-purple-50 border-purple-200">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900">Smart Reports</h3>
              <p className="text-sm text-purple-700">AI-powered insights highlight key findings</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        {diagnosticReports.map((report) => (
          <Card key={report.id}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">{report.type}</h3>
                <p className="text-sm text-gray-500">
                  {report.petName} • {new Date(report.date).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {report.vetName}
                </p>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                report.status === 'ready' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status === 'ready' ? (
                  <>
                    <CheckCircle className="w-3 h-3 inline mr-1" />
                    Ready
                  </>
                ) : (
                  <>
                    <Clock className="w-3 h-3 inline mr-1" />
                    Pending
                  </>
                )}
              </span>
            </div>

            {report.status === 'ready' && report.highlights && (
              <div className="mb-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <div className="text-sm font-medium text-purple-900 mb-2">
                    Smart Highlights
                  </div>
                  <ul className="space-y-1">
                    {report.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-purple-700 flex items-start gap-2">
                        <span className="text-purple-500 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedReport === report.id && report.status === 'ready' && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Test Date:</span>
                    <span className="font-medium">{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Report Type:</span>
                    <span className="font-medium">{report.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ordered By:</span>
                    <span className="font-medium">{report.vetName}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              {report.status === 'ready' ? (
                <>
                  <Button
                    size="sm"
                    fullWidth
                    onClick={() => handleViewReport(report.id)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Report
                  </Button>
                  <Button size="sm" variant="outline" fullWidth>
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </>
              ) : (
                <Button size="sm" variant="ghost" fullWidth disabled>
                  Report Processing...
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {diagnosticReports.length === 0 && (
        <div className="text-center py-12">
          <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No diagnostic reports found</p>
        </div>
      )}
    </div>
  );
};