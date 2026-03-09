// Mock data for Tinlip Autocare Admin Portal

export const clients = [
  { id: 'CLT-001', name: 'James Mwangi', email: 'james.mwangi@gmail.com', phone: '+254 712 345 678', vehicles: 2, cohort: 'Active', coverageStatus: 'Covered', joinedDate: '2024-08-15', idType: 'National ID', submittedDate: '2024-08-10', status: 'Approved' },
  { id: 'CLT-002', name: 'Wanjiku Njeri', email: 'wanjiku.njeri@yahoo.com', phone: '+254 723 456 789', vehicles: 1, cohort: 'Active', coverageStatus: 'Covered', joinedDate: '2024-09-02', idType: 'Passport', submittedDate: '2024-08-28', status: 'Approved' },
  { id: 'CLT-003', name: 'Ahmed Hassan', email: 'ahmed.hassan@outlook.com', phone: '+254 734 567 890', vehicles: 3, cohort: 'Dormant', coverageStatus: 'Expired', joinedDate: '2024-03-20', idType: 'National ID', submittedDate: '2024-03-15', status: 'Approved' },
  { id: 'CLT-004', name: 'Akinyi Odhiambo', email: 'akinyi.o@gmail.com', phone: '+254 745 678 901', vehicles: 1, cohort: 'Waiting Period', coverageStatus: 'Pending', joinedDate: '2025-01-05', idType: 'National ID', submittedDate: '2025-01-02', status: 'Pending' },
  { id: 'CLT-005', name: 'Peter Kamau', email: 'peter.kamau@gmail.com', phone: '+254 756 789 012', vehicles: 2, cohort: 'Prospects', coverageStatus: 'Not Started', joinedDate: '2025-01-10', idType: 'Military ID', submittedDate: '2025-01-08', status: 'Pending' },
  { id: 'CLT-006', name: 'Fatma Ali', email: 'fatma.ali@gmail.com', phone: '+254 767 890 123', vehicles: 1, cohort: 'Active', coverageStatus: 'Covered', joinedDate: '2024-07-12', idType: 'Passport', submittedDate: '2024-07-08', status: 'Approved' },
  { id: 'CLT-007', name: 'David Ochieng', email: 'david.ochieng@gmail.com', phone: '+254 778 901 234', vehicles: 1, cohort: 'Active', coverageStatus: 'Covered', joinedDate: '2024-10-18', idType: 'National ID', submittedDate: '2024-10-14', status: 'Approved' },
  { id: 'CLT-008', name: 'Grace Wambui', email: 'grace.w@outlook.com', phone: '+254 789 012 345', vehicles: 2, cohort: 'Dormant', coverageStatus: 'Expired', joinedDate: '2024-02-25', idType: 'National ID', submittedDate: '2024-02-20', status: 'Approved' },
  { id: 'CLT-009', name: 'Samuel Kipchoge', email: 'samuel.k@gmail.com', phone: '+254 790 123 456', vehicles: 1, cohort: 'Active', coverageStatus: 'Covered', joinedDate: '2024-11-05', idType: 'National ID', submittedDate: '2024-11-01', status: 'Pending' },
  { id: 'CLT-010', name: 'Lucy Njoki', email: 'lucy.njoki@yahoo.com', phone: '+254 701 234 567', vehicles: 1, cohort: 'Waiting Period', coverageStatus: 'Pending', joinedDate: '2025-01-12', idType: 'National ID', submittedDate: '2025-01-10', status: 'Pending' },
];

export const pendingClients = clients.filter(c => c.status === 'Pending');

export const vehicles = [
  { id: 'VEH-001', reg: 'KDD 234A', make: 'Toyota', model: 'Corolla', year: 2019, clientId: 'CLT-001', clientName: 'James Mwangi', engineNo: '2ZR-FE-4857291', chassisNo: 'JTDKN3DU5A0123456', mileage: 45200, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-002', reg: 'KDK 891B', make: 'Nissan', model: 'X-Trail', year: 2020, clientId: 'CLT-001', clientName: 'James Mwangi', engineNo: 'QR25DE-3948271', chassisNo: 'JN1TBNT30Z0234567', mileage: 32100, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-003', reg: 'KDD 567C', make: 'Honda', model: 'CR-V', year: 2018, clientId: 'CLT-002', clientName: 'Wanjiku Njeri', engineNo: 'R20A-2938475', chassisNo: 'SHSRE6870JU345678', mileage: 67800, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-004', reg: 'KDK 123D', make: 'Toyota', model: 'Hilux', year: 2021, clientId: 'CLT-003', clientName: 'Ahmed Hassan', engineNo: '2GD-FTV-1029384', chassisNo: 'MR0FB8CD5K0456789', mileage: 28900, documents: 'Incomplete', status: 'Pending' },
  { id: 'VEH-005', reg: 'KDD 456E', make: 'Subaru', model: 'Forester', year: 2017, clientId: 'CLT-003', clientName: 'Ahmed Hassan', engineNo: 'FB20-5847291', chassisNo: 'JF1SJ5LC5HG567890', mileage: 89200, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-006', reg: 'KDK 789F', make: 'Mazda', model: 'CX-5', year: 2022, clientId: 'CLT-004', clientName: 'Akinyi Odhiambo', engineNo: 'PE-VPS-3948271', chassisNo: 'JM3KFBCM5N0678901', mileage: 15400, documents: 'Pending Review', status: 'Pending' },
  { id: 'VEH-007', reg: 'KDD 012G', make: 'Volkswagen', model: 'Tiguan', year: 2020, clientId: 'CLT-005', clientName: 'Peter Kamau', engineNo: 'CZD-2948371', chassisNo: 'WVGZZZ5NZKW789012', mileage: 41600, documents: 'Pending Review', status: 'Pending' },
  { id: 'VEH-008', reg: 'KDK 345H', make: 'Toyota', model: 'Prado', year: 2019, clientId: 'CLT-005', clientName: 'Peter Kamau', engineNo: '1GD-FTV-8473920', chassisNo: 'JTEBH3FJ5KK890123', mileage: 52300, documents: 'Pending Review', status: 'Pending' },
  { id: 'VEH-009', reg: 'KDD 678I', make: 'Mercedes-Benz', model: 'C200', year: 2021, clientId: 'CLT-006', clientName: 'Fatma Ali', engineNo: 'M264-1827394', chassisNo: 'WDD2050421R901234', mileage: 22100, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-010', reg: 'KDK 901J', make: 'BMW', model: 'X3', year: 2020, clientId: 'CLT-007', clientName: 'David Ochieng', engineNo: 'B48B20-3847291', chassisNo: 'WBATX310XL0012345', mileage: 38700, documents: 'Complete', status: 'Approved' },
  { id: 'VEH-011', reg: 'KDD 234K', make: 'Mitsubishi', model: 'Outlander', year: 2018, clientId: 'CLT-009', clientName: 'Samuel Kipchoge', engineNo: '4J12-2938471', chassisNo: 'JA4AZ3A38JZ123456', mileage: 71200, documents: 'Pending Review', status: 'Pending' },
  { id: 'VEH-012', reg: 'KDK 567L', make: 'Hyundai', model: 'Tucson', year: 2022, clientId: 'CLT-010', clientName: 'Lucy Njoki', engineNo: 'G4FP-4857291', chassisNo: 'KM8J33A44NU234567', mileage: 12800, documents: 'Pending Review', status: 'Pending' },
];

export const pendingVehicles = vehicles.filter(v => v.status === 'Pending');

export const incidents = [
  { id: 'INC-001', claimRef: 'CLM-2025-001', clientId: 'CLT-001', clientName: 'James Mwangi', vehicleReg: 'KDD 234A', type: 'Breakdown', location: 'Mombasa Road, Nairobi', status: 'Open', created: '2025-01-14 08:30', assignedProvider: 'AA Kenya', description: 'Vehicle stalled on Mombasa Road near JKIA. Engine overheating suspected.', clientPhone: '+254 712 345 678' },
  { id: 'INC-002', claimRef: 'CLM-2025-002', clientId: 'CLT-002', clientName: 'Wanjiku Njeri', vehicleReg: 'KDD 567C', type: 'Accident', location: 'Thika Road, Ruiru', status: 'In Progress', created: '2025-01-13 14:15', assignedProvider: 'Shell', description: 'Minor fender bender at Ruiru bypass junction. No injuries.', clientPhone: '+254 723 456 789' },
  { id: 'INC-003', claimRef: 'CLM-2025-003', clientId: 'CLT-003', clientName: 'Ahmed Hassan', vehicleReg: 'KDK 123D', type: 'Flat Tyre', location: 'Ngong Road, Karen', status: 'Service Assigned', created: '2025-01-12 16:45', assignedProvider: 'Mechanic', description: 'Front left tyre punctured on Ngong Road near Karen roundabout.', clientPhone: '+254 734 567 890' },
  { id: 'INC-004', claimRef: 'CLM-2025-004', clientId: 'CLT-006', clientName: 'Fatma Ali', vehicleReg: 'KDD 678I', type: 'Battery', location: 'Westlands, Nairobi', status: 'Completed', created: '2025-01-10 09:20', assignedProvider: 'AA Kenya', description: 'Dead battery. Vehicle would not start in Westlands parking lot.', clientPhone: '+254 767 890 123' },
  { id: 'INC-005', claimRef: 'CLM-2025-005', clientId: 'CLT-007', clientName: 'David Ochieng', vehicleReg: 'KDK 901J', type: 'Towing', location: 'Langata Road, Nairobi', status: 'Closed', created: '2025-01-08 11:00', assignedProvider: 'IDT', description: 'Vehicle transmission failure. Required towing to BMW dealership.', clientPhone: '+254 778 901 234', rating: 4, timeliness: 4, professionalism: 5, comments: 'Quick response. Driver was professional.' },
  { id: 'INC-006', claimRef: 'CLM-2025-006', clientId: 'CLT-001', clientName: 'James Mwangi', vehicleReg: 'KDK 891B', type: 'Lockout', location: 'CBD, Nairobi', status: 'Open', created: '2025-01-14 10:45', assignedProvider: null, description: 'Locked keys inside vehicle at Kenyatta Avenue parking.', clientPhone: '+254 712 345 678' },
  { id: 'INC-007', claimRef: 'CLM-2025-007', clientId: 'CLT-009', clientName: 'Samuel Kipchoge', vehicleReg: 'KDD 234K', type: 'Breakdown', location: 'Eastern Bypass, Nairobi', status: 'In Progress', created: '2025-01-13 18:30', assignedProvider: 'Mechanic', description: 'Alternator failure on Eastern Bypass. Vehicle losing power.', clientPhone: '+254 790 123 456' },
];

export const invoices = [
  { id: 'INV-0001', client: 'James Mwangi', clientId: 'CLT-001', vehicles: 'KDD 234A, KDK 891B', amount: 18400, coverageStart: '2025-01-01', coverageEnd: '2025-06-30', dueDate: '2025-01-15', status: 'Paid' },
  { id: 'INV-0002', client: 'Wanjiku Njeri', clientId: 'CLT-002', vehicles: 'KDD 567C', amount: 9200, coverageStart: '2025-01-01', coverageEnd: '2025-06-30', dueDate: '2025-01-15', status: 'Paid' },
  { id: 'INV-0003', client: 'Ahmed Hassan', clientId: 'CLT-003', vehicles: 'KDK 123D, KDD 456E', amount: 18400, coverageStart: '2025-01-01', coverageEnd: '2025-06-30', dueDate: '2025-01-15', status: 'Overdue' },
  { id: 'INV-0004', client: 'Akinyi Odhiambo', clientId: 'CLT-004', vehicles: 'KDK 789F', amount: 9200, coverageStart: '2025-02-01', coverageEnd: '2025-07-31', dueDate: '2025-02-01', status: 'Pending' },
  { id: 'INV-0005', client: 'Peter Kamau', clientId: 'CLT-005', vehicles: 'KDD 012G, KDK 345H', amount: 18400, coverageStart: '2025-02-01', coverageEnd: '2025-07-31', dueDate: '2025-02-01', status: 'Pending' },
  { id: 'INV-0006', client: 'Fatma Ali', clientId: 'CLT-006', vehicles: 'KDD 678I', amount: 9200, coverageStart: '2025-01-01', coverageEnd: '2025-06-30', dueDate: '2025-01-15', status: 'Paid' },
  { id: 'INV-0007', client: 'David Ochieng', clientId: 'CLT-007', vehicles: 'KDK 901J', amount: 9200, coverageStart: '2025-01-01', coverageEnd: '2025-06-30', dueDate: '2025-01-15', status: 'Paid' },
  { id: 'INV-0008', client: 'Grace Wambui', clientId: 'CLT-008', vehicles: '2 vehicles', amount: 18400, coverageStart: '2024-07-01', coverageEnd: '2024-12-31', dueDate: '2024-07-15', status: 'Overdue' },
];

export const payments = [
  { id: 'PAY-001', ref: 'MPESA-RK23A8F9', client: 'James Mwangi', amount: 18400, method: 'M-Pesa', stkStatus: 'Confirmed', invoiceId: 'INV-0001', date: '2025-01-12 14:32' },
  { id: 'PAY-002', ref: 'MPESA-TL47B2D1', client: 'Wanjiku Njeri', amount: 9200, method: 'M-Pesa', stkStatus: 'Confirmed', invoiceId: 'INV-0002', date: '2025-01-13 09:15' },
  { id: 'PAY-003', ref: 'MPESA-MN58C3E4', client: 'Fatma Ali', amount: 9200, method: 'M-Pesa', stkStatus: 'Confirmed', invoiceId: 'INV-0006', date: '2025-01-11 16:45' },
  { id: 'PAY-004', ref: 'MPESA-QP72D4F6', client: 'David Ochieng', amount: 9200, method: 'M-Pesa', stkStatus: 'Confirmed', invoiceId: 'INV-0007', date: '2025-01-14 08:20' },
  { id: 'PAY-005', ref: 'MPESA-WX93E5G7', client: 'Akinyi Odhiambo', amount: 9200, method: 'M-Pesa', stkStatus: 'Pending', invoiceId: 'INV-0004', date: '2025-01-14 11:00' },
  { id: 'PAY-006', ref: 'MPESA-YZ14F6H8', client: 'Ahmed Hassan', amount: 18400, method: 'M-Pesa', stkStatus: 'Failed', invoiceId: 'INV-0003', date: '2025-01-13 13:45' },
  { id: 'PAY-007', ref: 'MPESA-AB25G7I9', client: 'Peter Kamau', amount: 18400, method: 'M-Pesa', stkStatus: 'Sent', invoiceId: 'INV-0005', date: '2025-01-14 12:30' },
];

export const claims = [
  { id: 'CLP-001', claimRef: 'CLM-2025-002', type: 'Accident', client: 'Wanjiku Njeri', vehicle: 'KDD 567C', estCost: 45000, status: 'Pending Review', paymentRef: null },
  { id: 'CLP-002', claimRef: 'CLM-2025-003', type: 'Flat Tyre', client: 'Ahmed Hassan', vehicle: 'KDK 123D', estCost: 3500, status: 'Approved', paymentRef: null },
  { id: 'CLP-003', claimRef: 'CLM-2025-004', type: 'Battery', client: 'Fatma Ali', vehicle: 'KDD 678I', estCost: 8500, status: 'Paid', paymentRef: 'MPESA-OUT-001' },
  { id: 'CLP-004', claimRef: 'CLM-2025-005', type: 'Towing', client: 'David Ochieng', vehicle: 'KDK 901J', estCost: 15000, status: 'Paid', paymentRef: 'MPESA-OUT-002' },
  { id: 'CLP-005', claimRef: 'CLM-2025-007', type: 'Breakdown', client: 'Samuel Kipchoge', vehicle: 'KDD 234K', estCost: 12000, status: 'Pending Review', paymentRef: null },
];

export const serviceProviders = [
  { id: 'SP-001', name: 'Shell Kenya', type: 'Fuel & Service', contact: '+254 20 222 1234', activeIncidents: 1 },
  { id: 'SP-002', name: 'AA Kenya', type: 'Roadside Assistance', contact: '+254 20 699 0000', activeIncidents: 2 },
  { id: 'SP-003', name: 'IDT (Integrated Diagnostics)', type: 'Diagnostics & Towing', contact: '+254 722 123 456', activeIncidents: 1 },
  { id: 'SP-004', name: 'General Mechanic', type: 'Mechanical Repair', contact: '+254 733 456 789', activeIncidents: 2 },
];

export const auditLogs = [
  { id: 'LOG-001', timestamp: '2025-01-14 09:32', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Approved Vehicle', entity: 'KBZ 123X', details: '—' },
  { id: 'LOG-002', timestamp: '2025-01-14 10:15', actor: 'Finance Team', role: 'Finance', action: 'Invoice Generated', entity: 'INV-0042', details: 'KES 9,200' },
  { id: 'LOG-003', timestamp: '2025-01-14 11:00', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Client Approved', entity: 'CLT-010', details: 'Lucy Njoki' },
  { id: 'LOG-004', timestamp: '2025-01-14 11:45', actor: 'Finance Team', role: 'Finance', action: 'Payment Verified', entity: 'PAY-004', details: 'KES 9,200 — David Ochieng' },
  { id: 'LOG-005', timestamp: '2025-01-13 14:20', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Incident Created', entity: 'INC-002', details: 'Accident — Wanjiku Njeri' },
  { id: 'LOG-006', timestamp: '2025-01-13 15:30', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Provider Assigned', entity: 'INC-002', details: 'Shell Kenya' },
  { id: 'LOG-007', timestamp: '2025-01-13 16:00', actor: 'Finance Team', role: 'Finance', action: 'Payout Approved', entity: 'CLP-002', details: 'KES 3,500 — Ahmed Hassan' },
  { id: 'LOG-008', timestamp: '2025-01-12 09:00', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Vehicle Rejected', entity: 'KDK 456M', details: 'Incomplete logbook documents' },
  { id: 'LOG-009', timestamp: '2025-01-12 10:30', actor: 'Finance Team', role: 'Finance', action: 'Invoice Generated', entity: 'INV-0041', details: 'KES 18,400' },
  { id: 'LOG-010', timestamp: '2025-01-11 14:00', actor: 'Wanjiru K.', role: 'Account Manager', action: 'Incident Closed', entity: 'INC-005', details: 'Towing — David Ochieng' },
];

export const recentActivity = [
  { time: '09:32', action: 'Vehicle KBZ 123X approved', actor: 'Wanjiru K.' },
  { time: '09:15', action: 'Payment KES 9,200 received from David Ochieng', actor: 'System' },
  { time: '08:45', action: 'New incident reported — Lockout at CBD', actor: 'James Mwangi' },
  { time: '08:30', action: 'Incident INC-001 escalated — Breakdown on Mombasa Road', actor: 'System' },
  { time: 'Yesterday', action: 'Invoice INV-0005 generated for Peter Kamau', actor: 'Finance Team' },
  { time: 'Yesterday', action: 'Provider AA Kenya assigned to INC-007', actor: 'Wanjiru K.' },
];

export const monthlyFinancials = [
  { month: 'Aug', premiums: 185000, claims: 22000 },
  { month: 'Sep', premiums: 210000, claims: 35000 },
  { month: 'Oct', premiums: 195000, claims: 18000 },
  { month: 'Nov', premiums: 228000, claims: 41000 },
  { month: 'Dec', premiums: 240000, claims: 28000 },
  { month: 'Jan', premiums: 248000, claims: 34500 },
];

export const monthlyServiceVolume = [
  { month: 'Feb', incidents: 5 },
  { month: 'Mar', incidents: 8 },
  { month: 'Apr', incidents: 6 },
  { month: 'May', incidents: 10 },
  { month: 'Jun', incidents: 7 },
  { month: 'Jul', incidents: 9 },
  { month: 'Aug', incidents: 12 },
  { month: 'Sep', incidents: 8 },
  { month: 'Oct', incidents: 11 },
  { month: 'Nov', incidents: 14 },
  { month: 'Dec', incidents: 10 },
  { month: 'Jan', incidents: 7 },
];

export const cohortBreakdown = [
  { name: 'Active', value: 5, fill: 'hsl(142, 72%, 29%)' },
  { name: 'Dormant', value: 2, fill: 'hsl(215, 16%, 47%)' },
  { name: 'Prospects', value: 1, fill: 'hsl(38, 78%, 52%)' },
  { name: 'Waiting Period', value: 2, fill: 'hsl(217, 91%, 60%)' },
];
