# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `nsrit`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*GetUserByPhone*](#getuserbyphone)
  - [*GetStudentsByBranch*](#getstudentsbybranch)
  - [*GetStudentsBySection*](#getstudentsbysection)
  - [*GetParentChildren*](#getparentchildren)
  - [*GetParentByUser*](#getparentbyuser)
  - [*GetBranches*](#getbranches)
  - [*GetBranchDetails*](#getbranchdetails)
  - [*GetUsersByRole*](#getusersbyrole)
  - [*GetAssignmentConflicts*](#getassignmentconflicts)
  - [*GetGlobalClasses*](#getglobalclasses)
  - [*GetClassDetails*](#getclassdetails)
  - [*GetGlobalStudents*](#getglobalstudents)
  - [*GetStudentProfile*](#getstudentprofile)
  - [*GetStudentAttendance*](#getstudentattendance)
  - [*GetStudentFeeHistory*](#getstudentfeehistory)
  - [*GetDashboardStatistics*](#getdashboardstatistics)
  - [*GetWingsByBranch*](#getwingsbybranch)
  - [*GetClassesByWing*](#getclassesbywing)
  - [*GetSectionsByClass*](#getsectionsbyclass)
  - [*GetTeacherAssignments*](#getteacherassignments)
  - [*SearchStudents*](#searchstudents)
  - [*GetStudentIdSequence*](#getstudentidsequence)
  - [*GetAttendanceByMonth*](#getattendancebymonth)
  - [*GetAttendanceBySection*](#getattendancebysection)
  - [*GetFeeDetails*](#getfeedetails)
  - [*GetFeeRecordsByBranch*](#getfeerecordsbybranch)
  - [*GetAllFeeRecords*](#getallfeerecords)
  - [*GetDueStudents*](#getduestudents)
  - [*GetPaidStudents*](#getpaidstudents)
  - [*GetBranchAnalytics*](#getbranchanalytics)
  - [*GetClassAnalytics*](#getclassanalytics)
- [**Mutations**](#mutations)
  - [*CreateBranch*](#createbranch)
  - [*UpdateBranch*](#updatebranch)
  - [*AssignBranchAdmin*](#assignbranchadmin)
  - [*AssignPrincipal*](#assignprincipal)
  - [*CreateClass*](#createclass)
  - [*CreateSection*](#createsection)
  - [*RemoveSection*](#removesection)
  - [*CreateUser*](#createuser)
  - [*ClaimUserFirebaseUID*](#claimuserfirebaseuid)
  - [*CreateParent*](#createparent)
  - [*CreateParentWithoutUser*](#createparentwithoutuser)
  - [*CreateStudent*](#createstudent)
  - [*CreateAttendance*](#createattendance)
  - [*UpdateAttendance*](#updateattendance)
  - [*UploadFeePayment*](#uploadfeepayment)
  - [*AssignTeacher*](#assignteacher)

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `nsrit`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `nsrit`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `nsrit` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetCurrentUser
You can execute the `GetCurrentUser` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetCurrentUser(dc: DataConnect, vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetCurrentUser(vars: GetCurrentUserVariables, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, GetCurrentUserVariables>;
```

### Variables
The `GetCurrentUser` Query requires an argument of type `GetCurrentUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCurrentUserVariables {
  firebaseUID: string;
}
```
### Return Type
Recall that calling the `GetCurrentUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetCurrentUser` Query is of type `GetCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetCurrentUserData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetCurrentUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetCurrentUserVariables } from '@dataconnect/generated';
import { useGetCurrentUser } from '@dataconnect/generated/react'

export default function GetCurrentUserComponent() {
  // The `useGetCurrentUser` Query hook requires an argument of type `GetCurrentUserVariables`:
  const getCurrentUserVars: GetCurrentUserVariables = {
    firebaseUID: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetCurrentUser(getCurrentUserVars);
  // Variables can be defined inline as well.
  const query = useGetCurrentUser({ firebaseUID: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetCurrentUser(dataConnect, getCurrentUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetCurrentUser(getCurrentUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetCurrentUser(dataConnect, getCurrentUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.users);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetUserByPhone
You can execute the `GetUserByPhone` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetUserByPhone(dc: DataConnect, vars: GetUserByPhoneVariables, options?: useDataConnectQueryOptions<GetUserByPhoneData>): UseDataConnectQueryResult<GetUserByPhoneData, GetUserByPhoneVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUserByPhone(vars: GetUserByPhoneVariables, options?: useDataConnectQueryOptions<GetUserByPhoneData>): UseDataConnectQueryResult<GetUserByPhoneData, GetUserByPhoneVariables>;
```

### Variables
The `GetUserByPhone` Query requires an argument of type `GetUserByPhoneVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserByPhoneVariables {
  phoneNumber: string;
}
```
### Return Type
Recall that calling the `GetUserByPhone` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUserByPhone` Query is of type `GetUserByPhoneData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetUserByPhoneData {
  users: ({
    id: UUIDString;
    firebaseUID: string;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    wingId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUserByPhone`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserByPhoneVariables } from '@dataconnect/generated';
import { useGetUserByPhone } from '@dataconnect/generated/react'

export default function GetUserByPhoneComponent() {
  // The `useGetUserByPhone` Query hook requires an argument of type `GetUserByPhoneVariables`:
  const getUserByPhoneVars: GetUserByPhoneVariables = {
    phoneNumber: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUserByPhone(getUserByPhoneVars);
  // Variables can be defined inline as well.
  const query = useGetUserByPhone({ phoneNumber: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUserByPhone(dataConnect, getUserByPhoneVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserByPhone(getUserByPhoneVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserByPhone(dataConnect, getUserByPhoneVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.users);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentsByBranch
You can execute the `GetStudentsByBranch` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentsByBranch(dc: DataConnect, vars: GetStudentsByBranchVariables, options?: useDataConnectQueryOptions<GetStudentsByBranchData>): UseDataConnectQueryResult<GetStudentsByBranchData, GetStudentsByBranchVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentsByBranch(vars: GetStudentsByBranchVariables, options?: useDataConnectQueryOptions<GetStudentsByBranchData>): UseDataConnectQueryResult<GetStudentsByBranchData, GetStudentsByBranchVariables>;
```

### Variables
The `GetStudentsByBranch` Query requires an argument of type `GetStudentsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentsByBranchVariables {
  branchId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetStudentsByBranch` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentsByBranch` Query is of type `GetStudentsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentsByBranchData {
  students: ({
    id: UUIDString;
    studentId: string;
    admissionYear: number;
    branchCode: string;
    serialNumber: number;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentsByBranch`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentsByBranchVariables } from '@dataconnect/generated';
import { useGetStudentsByBranch } from '@dataconnect/generated/react'

export default function GetStudentsByBranchComponent() {
  // The `useGetStudentsByBranch` Query hook requires an argument of type `GetStudentsByBranchVariables`:
  const getStudentsByBranchVars: GetStudentsByBranchVariables = {
    branchId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentsByBranch(getStudentsByBranchVars);
  // Variables can be defined inline as well.
  const query = useGetStudentsByBranch({ branchId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentsByBranch(dataConnect, getStudentsByBranchVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentsByBranch(getStudentsByBranchVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentsByBranch(dataConnect, getStudentsByBranchVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentsBySection
You can execute the `GetStudentsBySection` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentsBySection(dc: DataConnect, vars: GetStudentsBySectionVariables, options?: useDataConnectQueryOptions<GetStudentsBySectionData>): UseDataConnectQueryResult<GetStudentsBySectionData, GetStudentsBySectionVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentsBySection(vars: GetStudentsBySectionVariables, options?: useDataConnectQueryOptions<GetStudentsBySectionData>): UseDataConnectQueryResult<GetStudentsBySectionData, GetStudentsBySectionVariables>;
```

### Variables
The `GetStudentsBySection` Query requires an argument of type `GetStudentsBySectionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentsBySectionVariables {
  sectionId: UUIDString;
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetStudentsBySection` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentsBySection` Query is of type `GetStudentsBySectionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentsBySectionData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
  } & Student_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentsBySection`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentsBySectionVariables } from '@dataconnect/generated';
import { useGetStudentsBySection } from '@dataconnect/generated/react'

export default function GetStudentsBySectionComponent() {
  // The `useGetStudentsBySection` Query hook requires an argument of type `GetStudentsBySectionVariables`:
  const getStudentsBySectionVars: GetStudentsBySectionVariables = {
    sectionId: ..., 
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentsBySection(getStudentsBySectionVars);
  // Variables can be defined inline as well.
  const query = useGetStudentsBySection({ sectionId: ..., limit: ..., offset: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentsBySection(dataConnect, getStudentsBySectionVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentsBySection(getStudentsBySectionVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentsBySection(dataConnect, getStudentsBySectionVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetParentChildren
You can execute the `GetParentChildren` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetParentChildren(dc: DataConnect, vars: GetParentChildrenVariables, options?: useDataConnectQueryOptions<GetParentChildrenData>): UseDataConnectQueryResult<GetParentChildrenData, GetParentChildrenVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetParentChildren(vars: GetParentChildrenVariables, options?: useDataConnectQueryOptions<GetParentChildrenData>): UseDataConnectQueryResult<GetParentChildrenData, GetParentChildrenVariables>;
```

### Variables
The `GetParentChildren` Query requires an argument of type `GetParentChildrenVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetParentChildrenVariables {
  parentId: UUIDString;
}
```
### Return Type
Recall that calling the `GetParentChildren` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetParentChildren` Query is of type `GetParentChildrenData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetParentChildrenData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    admissionYear: number;
    branchCode: string;
    admissionDate: DateString;
  } & Student_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetParentChildren`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetParentChildrenVariables } from '@dataconnect/generated';
import { useGetParentChildren } from '@dataconnect/generated/react'

export default function GetParentChildrenComponent() {
  // The `useGetParentChildren` Query hook requires an argument of type `GetParentChildrenVariables`:
  const getParentChildrenVars: GetParentChildrenVariables = {
    parentId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetParentChildren(getParentChildrenVars);
  // Variables can be defined inline as well.
  const query = useGetParentChildren({ parentId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetParentChildren(dataConnect, getParentChildrenVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentChildren(getParentChildrenVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentChildren(dataConnect, getParentChildrenVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetParentByUser
You can execute the `GetParentByUser` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetParentByUser(dc: DataConnect, vars: GetParentByUserVariables, options?: useDataConnectQueryOptions<GetParentByUserData>): UseDataConnectQueryResult<GetParentByUserData, GetParentByUserVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetParentByUser(vars: GetParentByUserVariables, options?: useDataConnectQueryOptions<GetParentByUserData>): UseDataConnectQueryResult<GetParentByUserData, GetParentByUserVariables>;
```

### Variables
The `GetParentByUser` Query requires an argument of type `GetParentByUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetParentByUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that calling the `GetParentByUser` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetParentByUser` Query is of type `GetParentByUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetParentByUserData {
  parents: ({
    id: UUIDString;
    userId?: UUIDString | null;
    branchId: UUIDString;
    fullName: string;
    countryCode: string;
    phoneNumber: string;
    address?: string | null;
    isActive: boolean;
  } & Parent_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetParentByUser`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetParentByUserVariables } from '@dataconnect/generated';
import { useGetParentByUser } from '@dataconnect/generated/react'

export default function GetParentByUserComponent() {
  // The `useGetParentByUser` Query hook requires an argument of type `GetParentByUserVariables`:
  const getParentByUserVars: GetParentByUserVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetParentByUser(getParentByUserVars);
  // Variables can be defined inline as well.
  const query = useGetParentByUser({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetParentByUser(dataConnect, getParentByUserVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentByUser(getParentByUserVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetParentByUser(dataConnect, getParentByUserVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.parents);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetBranches
You can execute the `GetBranches` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetBranches(dc: DataConnect, vars?: GetBranchesVariables, options?: useDataConnectQueryOptions<GetBranchesData>): UseDataConnectQueryResult<GetBranchesData, GetBranchesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetBranches(vars?: GetBranchesVariables, options?: useDataConnectQueryOptions<GetBranchesData>): UseDataConnectQueryResult<GetBranchesData, GetBranchesVariables>;
```

### Variables
The `GetBranches` Query has an optional argument of type `GetBranchesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetBranchesVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetBranches` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetBranches` Query is of type `GetBranchesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetBranchesData {
  branches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
      principal?: {
        id: UUIDString;
        fullName: string;
        phoneNumber: string;
        role: string;
        isActive: boolean;
      } & User_Key;
        isActive: boolean;
  } & Branch_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetBranches`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetBranchesVariables } from '@dataconnect/generated';
import { useGetBranches } from '@dataconnect/generated/react'

export default function GetBranchesComponent() {
  // The `useGetBranches` Query hook has an optional argument of type `GetBranchesVariables`:
  const getBranchesVars: GetBranchesVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetBranches(getBranchesVars);
  // Variables can be defined inline as well.
  const query = useGetBranches({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `GetBranchesVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useGetBranches();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetBranches(dataConnect, getBranchesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranches(getBranchesVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useGetBranches(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranches(dataConnect, getBranchesVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.branches);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetBranchDetails
You can execute the `GetBranchDetails` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetBranchDetails(dc: DataConnect, vars: GetBranchDetailsVariables, options?: useDataConnectQueryOptions<GetBranchDetailsData>): UseDataConnectQueryResult<GetBranchDetailsData, GetBranchDetailsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetBranchDetails(vars: GetBranchDetailsVariables, options?: useDataConnectQueryOptions<GetBranchDetailsData>): UseDataConnectQueryResult<GetBranchDetailsData, GetBranchDetailsVariables>;
```

### Variables
The `GetBranchDetails` Query requires an argument of type `GetBranchDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetBranchDetailsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetBranchDetails` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetBranchDetails` Query is of type `GetBranchDetailsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetBranchDetailsData {
  branch?: {
    id: UUIDString;
    name: string;
    branchCode: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    pincode?: string | null;
    phone?: string | null;
    email?: string | null;
    status: string;
    branchAdminId?: UUIDString | null;
    principalId?: UUIDString | null;
    isActive: boolean;
    branchAdmin?: {
      id: UUIDString;
      fullName: string;
      phoneNumber: string;
      role: string;
      isActive: boolean;
    } & User_Key;
      principal?: {
        id: UUIDString;
        fullName: string;
        phoneNumber: string;
        role: string;
        isActive: boolean;
      } & User_Key;
  } & Branch_Key;
    academicClasses: ({
      id: UUIDString;
      branchId: UUIDString;
      wingId: UUIDString;
      name: string;
      displayOrder?: number | null;
      isActive: boolean;
    } & AcademicClass_Key)[];
      sections: ({
        id: UUIDString;
        branchId: UUIDString;
        wingId: UUIDString;
        academicClassId: UUIDString;
        name: string;
        isActive: boolean;
        academicClass: {
          id: UUIDString;
          name: string;
        } & AcademicClass_Key;
      } & Section_Key)[];
        students: ({
          id: UUIDString;
          studentId: string;
          fullName: string;
          academicClassId: UUIDString;
          sectionId: UUIDString;
          isActive: boolean;
        } & Student_Key)[];
          users: ({
            id: UUIDString;
            fullName: string;
            phoneNumber: string;
            role: string;
            branchId?: UUIDString | null;
            isActive: boolean;
          } & User_Key)[];
            teacherAssignments: ({
              id: UUIDString;
              teacherId: UUIDString;
              sectionId: UUIDString;
              isClassTeacher: boolean;
              teacher: {
                id: UUIDString;
                fullName: string;
                phoneNumber: string;
                role: string;
              } & User_Key;
            } & TeacherAssignment_Key)[];
              attendances: ({
                id: UUIDString;
                status: string;
                attendanceDate: DateString;
              } & Attendance_Key)[];
                studentFees: ({
                  id: UUIDString;
                  totalFee: number;
                  paidAmount: number;
                  remainingAmount: number;
                  status: string;
                  dueDate: DateString;
                } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetBranchDetails`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetBranchDetailsVariables } from '@dataconnect/generated';
import { useGetBranchDetails } from '@dataconnect/generated/react'

export default function GetBranchDetailsComponent() {
  // The `useGetBranchDetails` Query hook requires an argument of type `GetBranchDetailsVariables`:
  const getBranchDetailsVars: GetBranchDetailsVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetBranchDetails(getBranchDetailsVars);
  // Variables can be defined inline as well.
  const query = useGetBranchDetails({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetBranchDetails(dataConnect, getBranchDetailsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranchDetails(getBranchDetailsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranchDetails(dataConnect, getBranchDetailsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.branch);
    console.log(query.data.academicClasses);
    console.log(query.data.sections);
    console.log(query.data.students);
    console.log(query.data.users);
    console.log(query.data.teacherAssignments);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetUsersByRole
You can execute the `GetUsersByRole` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetUsersByRole(dc: DataConnect, vars: GetUsersByRoleVariables, options?: useDataConnectQueryOptions<GetUsersByRoleData>): UseDataConnectQueryResult<GetUsersByRoleData, GetUsersByRoleVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUsersByRole(vars: GetUsersByRoleVariables, options?: useDataConnectQueryOptions<GetUsersByRoleData>): UseDataConnectQueryResult<GetUsersByRoleData, GetUsersByRoleVariables>;
```

### Variables
The `GetUsersByRole` Query requires an argument of type `GetUsersByRoleVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUsersByRoleVariables {
  role: string;
  alternateRole: string;
  searchText: string;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `GetUsersByRole` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUsersByRole` Query is of type `GetUsersByRoleData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetUsersByRoleData {
  users: ({
    id: UUIDString;
    fullName: string;
    phoneNumber: string;
    role: string;
    branchId?: UUIDString | null;
    isActive: boolean;
  } & User_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUsersByRole`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUsersByRoleVariables } from '@dataconnect/generated';
import { useGetUsersByRole } from '@dataconnect/generated/react'

export default function GetUsersByRoleComponent() {
  // The `useGetUsersByRole` Query hook requires an argument of type `GetUsersByRoleVariables`:
  const getUsersByRoleVars: GetUsersByRoleVariables = {
    role: ..., 
    alternateRole: ..., 
    searchText: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUsersByRole(getUsersByRoleVars);
  // Variables can be defined inline as well.
  const query = useGetUsersByRole({ role: ..., alternateRole: ..., searchText: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUsersByRole(dataConnect, getUsersByRoleVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUsersByRole(getUsersByRoleVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUsersByRole(dataConnect, getUsersByRoleVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.users);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAssignmentConflicts
You can execute the `GetAssignmentConflicts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAssignmentConflicts(dc: DataConnect, vars: GetAssignmentConflictsVariables, options?: useDataConnectQueryOptions<GetAssignmentConflictsData>): UseDataConnectQueryResult<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAssignmentConflicts(vars: GetAssignmentConflictsVariables, options?: useDataConnectQueryOptions<GetAssignmentConflictsData>): UseDataConnectQueryResult<GetAssignmentConflictsData, GetAssignmentConflictsVariables>;
```

### Variables
The `GetAssignmentConflicts` Query requires an argument of type `GetAssignmentConflictsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAssignmentConflictsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that calling the `GetAssignmentConflicts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAssignmentConflicts` Query is of type `GetAssignmentConflictsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetAssignmentConflictsData {
  branchAdminBranches: ({
    id: UUIDString;
    name: string;
    branchCode: string;
  } & Branch_Key)[];
    principalBranches: ({
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAssignmentConflicts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAssignmentConflictsVariables } from '@dataconnect/generated';
import { useGetAssignmentConflicts } from '@dataconnect/generated/react'

export default function GetAssignmentConflictsComponent() {
  // The `useGetAssignmentConflicts` Query hook requires an argument of type `GetAssignmentConflictsVariables`:
  const getAssignmentConflictsVars: GetAssignmentConflictsVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAssignmentConflicts(getAssignmentConflictsVars);
  // Variables can be defined inline as well.
  const query = useGetAssignmentConflicts({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAssignmentConflicts(dataConnect, getAssignmentConflictsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAssignmentConflicts(getAssignmentConflictsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAssignmentConflicts(dataConnect, getAssignmentConflictsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.branchAdminBranches);
    console.log(query.data.principalBranches);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetGlobalClasses
You can execute the `GetGlobalClasses` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetGlobalClasses(dc: DataConnect, vars?: GetGlobalClassesVariables, options?: useDataConnectQueryOptions<GetGlobalClassesData>): UseDataConnectQueryResult<GetGlobalClassesData, GetGlobalClassesVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetGlobalClasses(vars?: GetGlobalClassesVariables, options?: useDataConnectQueryOptions<GetGlobalClassesData>): UseDataConnectQueryResult<GetGlobalClassesData, GetGlobalClassesVariables>;
```

### Variables
The `GetGlobalClasses` Query has an optional argument of type `GetGlobalClassesVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetGlobalClassesVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetGlobalClasses` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetGlobalClasses` Query is of type `GetGlobalClassesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetGlobalClassesData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
      status: string;
      isActive: boolean;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
        displayOrder?: number | null;
      } & AcademicClass_Key;
  } & Section_Key)[];
    students: ({
      id: UUIDString;
      branchId: UUIDString;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      isActive: boolean;
    } & Student_Key)[];
      teacherAssignments: ({
        id: UUIDString;
        teacherId: UUIDString;
        sectionId: UUIDString;
        isClassTeacher: boolean;
        teacher: {
          id: UUIDString;
          fullName: string;
          phoneNumber: string;
          role: string;
        } & User_Key;
      } & TeacherAssignment_Key)[];
        attendances: ({
          id: UUIDString;
          sectionId: UUIDString;
          status: string;
        } & Attendance_Key)[];
          studentFees: ({
            id: UUIDString;
            paidAmount: number;
            remainingAmount: number;
            student: {
              id: UUIDString;
              sectionId: UUIDString;
            } & Student_Key;
          } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetGlobalClasses`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetGlobalClassesVariables } from '@dataconnect/generated';
import { useGetGlobalClasses } from '@dataconnect/generated/react'

export default function GetGlobalClassesComponent() {
  // The `useGetGlobalClasses` Query hook has an optional argument of type `GetGlobalClassesVariables`:
  const getGlobalClassesVars: GetGlobalClassesVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetGlobalClasses(getGlobalClassesVars);
  // Variables can be defined inline as well.
  const query = useGetGlobalClasses({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `GetGlobalClassesVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useGetGlobalClasses();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetGlobalClasses(dataConnect, getGlobalClassesVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalClasses(getGlobalClassesVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useGetGlobalClasses(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalClasses(dataConnect, getGlobalClassesVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sections);
    console.log(query.data.students);
    console.log(query.data.teacherAssignments);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClassDetails
You can execute the `GetClassDetails` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClassDetails(dc: DataConnect, vars: GetClassDetailsVariables, options?: useDataConnectQueryOptions<GetClassDetailsData>): UseDataConnectQueryResult<GetClassDetailsData, GetClassDetailsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClassDetails(vars: GetClassDetailsVariables, options?: useDataConnectQueryOptions<GetClassDetailsData>): UseDataConnectQueryResult<GetClassDetailsData, GetClassDetailsVariables>;
```

### Variables
The `GetClassDetails` Query requires an argument of type `GetClassDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClassDetailsVariables {
  sectionId: UUIDString;
}
```
### Return Type
Recall that calling the `GetClassDetails` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClassDetails` Query is of type `GetClassDetailsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetClassDetailsData {
  section?: {
    id: UUIDString;
    branchId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
        displayOrder?: number | null;
      } & AcademicClass_Key;
  } & Section_Key;
    students: ({
      id: UUIDString;
      studentId: string;
      fullName: string;
      gender?: string | null;
      phoneNumber?: string | null;
      rollNumber?: string | null;
      isActive: boolean;
    } & Student_Key)[];
      teacherAssignments: ({
        id: UUIDString;
        teacherId: UUIDString;
        subjectName?: string | null;
        isClassTeacher: boolean;
        teacher: {
          id: UUIDString;
          fullName: string;
          phoneNumber: string;
          role: string;
        } & User_Key;
      } & TeacherAssignment_Key)[];
        attendances: ({
          id: UUIDString;
          studentId: UUIDString;
          attendanceDate: DateString;
          status: string;
          remarks?: string | null;
        } & Attendance_Key)[];
          studentFees: ({
            id: UUIDString;
            studentId: UUIDString;
            totalFee: number;
            paidAmount: number;
            remainingAmount: number;
            status: string;
            dueDate: DateString;
          } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClassDetails`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClassDetailsVariables } from '@dataconnect/generated';
import { useGetClassDetails } from '@dataconnect/generated/react'

export default function GetClassDetailsComponent() {
  // The `useGetClassDetails` Query hook requires an argument of type `GetClassDetailsVariables`:
  const getClassDetailsVars: GetClassDetailsVariables = {
    sectionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClassDetails(getClassDetailsVars);
  // Variables can be defined inline as well.
  const query = useGetClassDetails({ sectionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClassDetails(dataConnect, getClassDetailsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassDetails(getClassDetailsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassDetails(dataConnect, getClassDetailsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.section);
    console.log(query.data.students);
    console.log(query.data.teacherAssignments);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetGlobalStudents
You can execute the `GetGlobalStudents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetGlobalStudents(dc: DataConnect, vars?: GetGlobalStudentsVariables, options?: useDataConnectQueryOptions<GetGlobalStudentsData>): UseDataConnectQueryResult<GetGlobalStudentsData, GetGlobalStudentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetGlobalStudents(vars?: GetGlobalStudentsVariables, options?: useDataConnectQueryOptions<GetGlobalStudentsData>): UseDataConnectQueryResult<GetGlobalStudentsData, GetGlobalStudentsVariables>;
```

### Variables
The `GetGlobalStudents` Query has an optional argument of type `GetGlobalStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetGlobalStudentsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetGlobalStudents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetGlobalStudents` Query is of type `GetGlobalStudentsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetGlobalStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
      } & AcademicClass_Key;
        section: {
          id: UUIDString;
          name: string;
        } & Section_Key;
          parent: {
            id: UUIDString;
            fullName: string;
            fatherName?: string | null;
            motherName?: string | null;
            phoneNumber: string;
            email?: string | null;
          } & Parent_Key;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      studentId: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        studentId: UUIDString;
        paidAmount: number;
        remainingAmount: number;
        status: string;
      } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetGlobalStudents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetGlobalStudentsVariables } from '@dataconnect/generated';
import { useGetGlobalStudents } from '@dataconnect/generated/react'

export default function GetGlobalStudentsComponent() {
  // The `useGetGlobalStudents` Query hook has an optional argument of type `GetGlobalStudentsVariables`:
  const getGlobalStudentsVars: GetGlobalStudentsVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetGlobalStudents(getGlobalStudentsVars);
  // Variables can be defined inline as well.
  const query = useGetGlobalStudents({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `GetGlobalStudentsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useGetGlobalStudents();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetGlobalStudents(dataConnect, getGlobalStudentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStudents(getGlobalStudentsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useGetGlobalStudents(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetGlobalStudents(dataConnect, getGlobalStudentsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentProfile
You can execute the `GetStudentProfile` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentProfile(dc: DataConnect, vars: GetStudentProfileVariables, options?: useDataConnectQueryOptions<GetStudentProfileData>): UseDataConnectQueryResult<GetStudentProfileData, GetStudentProfileVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentProfile(vars: GetStudentProfileVariables, options?: useDataConnectQueryOptions<GetStudentProfileData>): UseDataConnectQueryResult<GetStudentProfileData, GetStudentProfileVariables>;
```

### Variables
The `GetStudentProfile` Query requires an argument of type `GetStudentProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentProfileVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that calling the `GetStudentProfile` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentProfile` Query is of type `GetStudentProfileData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentProfileData {
  student?: {
    id: UUIDString;
    studentId: string;
    fullName: string;
    gender?: string | null;
    dateOfBirth?: DateString | null;
    photoUrl?: string | null;
    bloodGroup?: string | null;
    rollNumber?: string | null;
    branchId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    address?: string | null;
    aadhaarDocumentUrl?: string | null;
    transferCertificateUrl?: string | null;
    birthCertificateUrl?: string | null;
    admissionDate: DateString;
    isActive: boolean;
    branch: {
      id: UUIDString;
      name: string;
      branchCode: string;
    } & Branch_Key;
      academicClass: {
        id: UUIDString;
        name: string;
      } & AcademicClass_Key;
        section: {
          id: UUIDString;
          name: string;
        } & Section_Key;
          parent: {
            id: UUIDString;
            fullName: string;
            fatherName?: string | null;
            motherName?: string | null;
            countryCode: string;
            phoneNumber: string;
            email?: string | null;
            address?: string | null;
          } & Parent_Key;
  } & Student_Key;
    attendances: ({
      id: UUIDString;
      attendanceDate: DateString;
      status: string;
      remarks?: string | null;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        totalFee: number;
        paidAmount: number;
        remainingAmount: number;
        status: string;
        dueDate: DateString;
      } & StudentFee_Key)[];
        payments: ({
          id: UUIDString;
          studentFeeId: UUIDString;
          amount: number;
          paymentMode: string;
          receiptNumber?: string | null;
          uploadedById: UUIDString;
          remarks?: string | null;
          paidAt: TimestampString;
        } & Payment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentProfile`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentProfileVariables } from '@dataconnect/generated';
import { useGetStudentProfile } from '@dataconnect/generated/react'

export default function GetStudentProfileComponent() {
  // The `useGetStudentProfile` Query hook requires an argument of type `GetStudentProfileVariables`:
  const getStudentProfileVars: GetStudentProfileVariables = {
    studentId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentProfile(getStudentProfileVars);
  // Variables can be defined inline as well.
  const query = useGetStudentProfile({ studentId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentProfile(dataConnect, getStudentProfileVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentProfile(getStudentProfileVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentProfile(dataConnect, getStudentProfileVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.student);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
    console.log(query.data.payments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentAttendance
You can execute the `GetStudentAttendance` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentAttendance(dc: DataConnect, vars: GetStudentAttendanceVariables, options?: useDataConnectQueryOptions<GetStudentAttendanceData>): UseDataConnectQueryResult<GetStudentAttendanceData, GetStudentAttendanceVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentAttendance(vars: GetStudentAttendanceVariables, options?: useDataConnectQueryOptions<GetStudentAttendanceData>): UseDataConnectQueryResult<GetStudentAttendanceData, GetStudentAttendanceVariables>;
```

### Variables
The `GetStudentAttendance` Query requires an argument of type `GetStudentAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentAttendanceVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that calling the `GetStudentAttendance` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentAttendance` Query is of type `GetStudentAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentAttendanceData {
  attendances: ({
    id: UUIDString;
    attendanceDate: DateString;
    status: string;
    remarks?: string | null;
  } & Attendance_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentAttendance`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentAttendanceVariables } from '@dataconnect/generated';
import { useGetStudentAttendance } from '@dataconnect/generated/react'

export default function GetStudentAttendanceComponent() {
  // The `useGetStudentAttendance` Query hook requires an argument of type `GetStudentAttendanceVariables`:
  const getStudentAttendanceVars: GetStudentAttendanceVariables = {
    studentId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentAttendance(getStudentAttendanceVars);
  // Variables can be defined inline as well.
  const query = useGetStudentAttendance({ studentId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentAttendance(dataConnect, getStudentAttendanceVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentAttendance(getStudentAttendanceVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentAttendance(dataConnect, getStudentAttendanceVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.attendances);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentFeeHistory
You can execute the `GetStudentFeeHistory` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentFeeHistory(dc: DataConnect, vars: GetStudentFeeHistoryVariables, options?: useDataConnectQueryOptions<GetStudentFeeHistoryData>): UseDataConnectQueryResult<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentFeeHistory(vars: GetStudentFeeHistoryVariables, options?: useDataConnectQueryOptions<GetStudentFeeHistoryData>): UseDataConnectQueryResult<GetStudentFeeHistoryData, GetStudentFeeHistoryVariables>;
```

### Variables
The `GetStudentFeeHistory` Query requires an argument of type `GetStudentFeeHistoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentFeeHistoryVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that calling the `GetStudentFeeHistory` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentFeeHistory` Query is of type `GetStudentFeeHistoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentFeeHistoryData {
  studentFees: ({
    id: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
  } & StudentFee_Key)[];
    payments: ({
      id: UUIDString;
      studentFeeId: UUIDString;
      amount: number;
      paymentMode: string;
      receiptNumber?: string | null;
      remarks?: string | null;
      paidAt: TimestampString;
    } & Payment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentFeeHistory`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentFeeHistoryVariables } from '@dataconnect/generated';
import { useGetStudentFeeHistory } from '@dataconnect/generated/react'

export default function GetStudentFeeHistoryComponent() {
  // The `useGetStudentFeeHistory` Query hook requires an argument of type `GetStudentFeeHistoryVariables`:
  const getStudentFeeHistoryVars: GetStudentFeeHistoryVariables = {
    studentId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentFeeHistory(getStudentFeeHistoryVars);
  // Variables can be defined inline as well.
  const query = useGetStudentFeeHistory({ studentId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentFeeHistory(dataConnect, getStudentFeeHistoryVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentFeeHistory(getStudentFeeHistoryVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentFeeHistory(dataConnect, getStudentFeeHistoryVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
    console.log(query.data.payments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetDashboardStatistics
You can execute the `GetDashboardStatistics` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetDashboardStatistics(dc: DataConnect, options?: useDataConnectQueryOptions<GetDashboardStatisticsData>): UseDataConnectQueryResult<GetDashboardStatisticsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetDashboardStatistics(options?: useDataConnectQueryOptions<GetDashboardStatisticsData>): UseDataConnectQueryResult<GetDashboardStatisticsData, undefined>;
```

### Variables
The `GetDashboardStatistics` Query has no variables.
### Return Type
Recall that calling the `GetDashboardStatistics` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetDashboardStatistics` Query is of type `GetDashboardStatisticsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetDashboardStatisticsData {
  branches: ({
    id: UUIDString;
    isActive: boolean;
    status: string;
  } & Branch_Key)[];
    academicClasses: ({
      id: UUIDString;
      branchId: UUIDString;
      isActive: boolean;
    } & AcademicClass_Key)[];
      users: ({
        id: UUIDString;
        branchId?: UUIDString | null;
        role: string;
      } & User_Key)[];
        students: ({
          id: UUIDString;
          branchId: UUIDString;
        } & Student_Key)[];
          attendances: ({
            id: UUIDString;
            status: string;
            attendanceDate: DateString;
          } & Attendance_Key)[];
            studentFees: ({
              id: UUIDString;
              remainingAmount: number;
            } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetDashboardStatistics`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useGetDashboardStatistics } from '@dataconnect/generated/react'

export default function GetDashboardStatisticsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetDashboardStatistics();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetDashboardStatistics(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetDashboardStatistics(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetDashboardStatistics(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.branches);
    console.log(query.data.academicClasses);
    console.log(query.data.users);
    console.log(query.data.students);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetWingsByBranch
You can execute the `GetWingsByBranch` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetWingsByBranch(dc: DataConnect, vars: GetWingsByBranchVariables, options?: useDataConnectQueryOptions<GetWingsByBranchData>): UseDataConnectQueryResult<GetWingsByBranchData, GetWingsByBranchVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetWingsByBranch(vars: GetWingsByBranchVariables, options?: useDataConnectQueryOptions<GetWingsByBranchData>): UseDataConnectQueryResult<GetWingsByBranchData, GetWingsByBranchVariables>;
```

### Variables
The `GetWingsByBranch` Query requires an argument of type `GetWingsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetWingsByBranchVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetWingsByBranch` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetWingsByBranch` Query is of type `GetWingsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetWingsByBranchData {
  wings: ({
    id: UUIDString;
    branchId: UUIDString;
    name: string;
    code?: string | null;
    isActive: boolean;
  } & Wing_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetWingsByBranch`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetWingsByBranchVariables } from '@dataconnect/generated';
import { useGetWingsByBranch } from '@dataconnect/generated/react'

export default function GetWingsByBranchComponent() {
  // The `useGetWingsByBranch` Query hook requires an argument of type `GetWingsByBranchVariables`:
  const getWingsByBranchVars: GetWingsByBranchVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetWingsByBranch(getWingsByBranchVars);
  // Variables can be defined inline as well.
  const query = useGetWingsByBranch({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetWingsByBranch(dataConnect, getWingsByBranchVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetWingsByBranch(getWingsByBranchVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetWingsByBranch(dataConnect, getWingsByBranchVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.wings);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClassesByWing
You can execute the `GetClassesByWing` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClassesByWing(dc: DataConnect, vars: GetClassesByWingVariables, options?: useDataConnectQueryOptions<GetClassesByWingData>): UseDataConnectQueryResult<GetClassesByWingData, GetClassesByWingVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClassesByWing(vars: GetClassesByWingVariables, options?: useDataConnectQueryOptions<GetClassesByWingData>): UseDataConnectQueryResult<GetClassesByWingData, GetClassesByWingVariables>;
```

### Variables
The `GetClassesByWing` Query requires an argument of type `GetClassesByWingVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClassesByWingVariables {
  wingId: UUIDString;
}
```
### Return Type
Recall that calling the `GetClassesByWing` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClassesByWing` Query is of type `GetClassesByWingData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetClassesByWingData {
  academicClasses: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    name: string;
    displayOrder?: number | null;
    isActive: boolean;
  } & AcademicClass_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClassesByWing`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClassesByWingVariables } from '@dataconnect/generated';
import { useGetClassesByWing } from '@dataconnect/generated/react'

export default function GetClassesByWingComponent() {
  // The `useGetClassesByWing` Query hook requires an argument of type `GetClassesByWingVariables`:
  const getClassesByWingVars: GetClassesByWingVariables = {
    wingId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClassesByWing(getClassesByWingVars);
  // Variables can be defined inline as well.
  const query = useGetClassesByWing({ wingId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClassesByWing(dataConnect, getClassesByWingVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassesByWing(getClassesByWingVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassesByWing(dataConnect, getClassesByWingVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.academicClasses);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetSectionsByClass
You can execute the `GetSectionsByClass` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetSectionsByClass(dc: DataConnect, vars: GetSectionsByClassVariables, options?: useDataConnectQueryOptions<GetSectionsByClassData>): UseDataConnectQueryResult<GetSectionsByClassData, GetSectionsByClassVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetSectionsByClass(vars: GetSectionsByClassVariables, options?: useDataConnectQueryOptions<GetSectionsByClassData>): UseDataConnectQueryResult<GetSectionsByClassData, GetSectionsByClassVariables>;
```

### Variables
The `GetSectionsByClass` Query requires an argument of type `GetSectionsByClassVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetSectionsByClassVariables {
  academicClassId: UUIDString;
}
```
### Return Type
Recall that calling the `GetSectionsByClass` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetSectionsByClass` Query is of type `GetSectionsByClassData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetSectionsByClassData {
  sections: ({
    id: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    name: string;
    isActive: boolean;
  } & Section_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetSectionsByClass`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetSectionsByClassVariables } from '@dataconnect/generated';
import { useGetSectionsByClass } from '@dataconnect/generated/react'

export default function GetSectionsByClassComponent() {
  // The `useGetSectionsByClass` Query hook requires an argument of type `GetSectionsByClassVariables`:
  const getSectionsByClassVars: GetSectionsByClassVariables = {
    academicClassId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetSectionsByClass(getSectionsByClassVars);
  // Variables can be defined inline as well.
  const query = useGetSectionsByClass({ academicClassId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetSectionsByClass(dataConnect, getSectionsByClassVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetSectionsByClass(getSectionsByClassVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetSectionsByClass(dataConnect, getSectionsByClassVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.sections);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetTeacherAssignments
You can execute the `GetTeacherAssignments` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetTeacherAssignments(dc: DataConnect, vars: GetTeacherAssignmentsVariables, options?: useDataConnectQueryOptions<GetTeacherAssignmentsData>): UseDataConnectQueryResult<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetTeacherAssignments(vars: GetTeacherAssignmentsVariables, options?: useDataConnectQueryOptions<GetTeacherAssignmentsData>): UseDataConnectQueryResult<GetTeacherAssignmentsData, GetTeacherAssignmentsVariables>;
```

### Variables
The `GetTeacherAssignments` Query requires an argument of type `GetTeacherAssignmentsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetTeacherAssignmentsVariables {
  teacherId: UUIDString;
}
```
### Return Type
Recall that calling the `GetTeacherAssignments` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetTeacherAssignments` Query is of type `GetTeacherAssignmentsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetTeacherAssignmentsData {
  teacherAssignments: ({
    id: UUIDString;
    teacherId: UUIDString;
    branchId: UUIDString;
    wingId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    subjectName?: string | null;
    isClassTeacher: boolean;
  } & TeacherAssignment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetTeacherAssignments`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetTeacherAssignmentsVariables } from '@dataconnect/generated';
import { useGetTeacherAssignments } from '@dataconnect/generated/react'

export default function GetTeacherAssignmentsComponent() {
  // The `useGetTeacherAssignments` Query hook requires an argument of type `GetTeacherAssignmentsVariables`:
  const getTeacherAssignmentsVars: GetTeacherAssignmentsVariables = {
    teacherId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetTeacherAssignments(getTeacherAssignmentsVars);
  // Variables can be defined inline as well.
  const query = useGetTeacherAssignments({ teacherId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetTeacherAssignments(dataConnect, getTeacherAssignmentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetTeacherAssignments(getTeacherAssignmentsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetTeacherAssignments(dataConnect, getTeacherAssignmentsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.teacherAssignments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SearchStudents
You can execute the `SearchStudents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useSearchStudents(dc: DataConnect, vars: SearchStudentsVariables, options?: useDataConnectQueryOptions<SearchStudentsData>): UseDataConnectQueryResult<SearchStudentsData, SearchStudentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useSearchStudents(vars: SearchStudentsVariables, options?: useDataConnectQueryOptions<SearchStudentsData>): UseDataConnectQueryResult<SearchStudentsData, SearchStudentsVariables>;
```

### Variables
The `SearchStudents` Query requires an argument of type `SearchStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SearchStudentsVariables {
  branchId: UUIDString;
  searchText: string;
  limit?: number | null;
}
```
### Return Type
Recall that calling the `SearchStudents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `SearchStudents` Query is of type `SearchStudentsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SearchStudentsData {
  students: ({
    id: UUIDString;
    studentId: string;
    fullName: string;
    branchId: UUIDString;
    wingId?: UUIDString | null;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    parentId: UUIDString;
    phoneNumber?: string | null;
    admissionDate: DateString;
  } & Student_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `SearchStudents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SearchStudentsVariables } from '@dataconnect/generated';
import { useSearchStudents } from '@dataconnect/generated/react'

export default function SearchStudentsComponent() {
  // The `useSearchStudents` Query hook requires an argument of type `SearchStudentsVariables`:
  const searchStudentsVars: SearchStudentsVariables = {
    branchId: ..., 
    searchText: ..., 
    limit: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useSearchStudents(searchStudentsVars);
  // Variables can be defined inline as well.
  const query = useSearchStudents({ branchId: ..., searchText: ..., limit: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useSearchStudents(dataConnect, searchStudentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useSearchStudents(searchStudentsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useSearchStudents(dataConnect, searchStudentsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetStudentIdSequence
You can execute the `GetStudentIdSequence` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetStudentIdSequence(dc: DataConnect, vars: GetStudentIdSequenceVariables, options?: useDataConnectQueryOptions<GetStudentIdSequenceData>): UseDataConnectQueryResult<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetStudentIdSequence(vars: GetStudentIdSequenceVariables, options?: useDataConnectQueryOptions<GetStudentIdSequenceData>): UseDataConnectQueryResult<GetStudentIdSequenceData, GetStudentIdSequenceVariables>;
```

### Variables
The `GetStudentIdSequence` Query requires an argument of type `GetStudentIdSequenceVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetStudentIdSequenceVariables {
  admissionYear: number;
  branchCode: string;
}
```
### Return Type
Recall that calling the `GetStudentIdSequence` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetStudentIdSequence` Query is of type `GetStudentIdSequenceData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetStudentIdSequenceData {
  studentIdSequences: ({
    admissionYear: number;
    branchCode: string;
    lastSerialNumber: number;
  } & StudentIdSequence_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetStudentIdSequence`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetStudentIdSequenceVariables } from '@dataconnect/generated';
import { useGetStudentIdSequence } from '@dataconnect/generated/react'

export default function GetStudentIdSequenceComponent() {
  // The `useGetStudentIdSequence` Query hook requires an argument of type `GetStudentIdSequenceVariables`:
  const getStudentIdSequenceVars: GetStudentIdSequenceVariables = {
    admissionYear: ..., 
    branchCode: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetStudentIdSequence(getStudentIdSequenceVars);
  // Variables can be defined inline as well.
  const query = useGetStudentIdSequence({ admissionYear: ..., branchCode: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetStudentIdSequence(dataConnect, getStudentIdSequenceVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentIdSequence(getStudentIdSequenceVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetStudentIdSequence(dataConnect, getStudentIdSequenceVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentIdSequences);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAttendanceByMonth
You can execute the `GetAttendanceByMonth` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAttendanceByMonth(dc: DataConnect, vars: GetAttendanceByMonthVariables, options?: useDataConnectQueryOptions<GetAttendanceByMonthData>): UseDataConnectQueryResult<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAttendanceByMonth(vars: GetAttendanceByMonthVariables, options?: useDataConnectQueryOptions<GetAttendanceByMonthData>): UseDataConnectQueryResult<GetAttendanceByMonthData, GetAttendanceByMonthVariables>;
```

### Variables
The `GetAttendanceByMonth` Query requires an argument of type `GetAttendanceByMonthVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAttendanceByMonthVariables {
  studentId: UUIDString;
  fromDate: DateString;
  toDate: DateString;
}
```
### Return Type
Recall that calling the `GetAttendanceByMonth` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAttendanceByMonth` Query is of type `GetAttendanceByMonthData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetAttendanceByMonthData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
    createdAt: TimestampString;
  } & Attendance_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAttendanceByMonth`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAttendanceByMonthVariables } from '@dataconnect/generated';
import { useGetAttendanceByMonth } from '@dataconnect/generated/react'

export default function GetAttendanceByMonthComponent() {
  // The `useGetAttendanceByMonth` Query hook requires an argument of type `GetAttendanceByMonthVariables`:
  const getAttendanceByMonthVars: GetAttendanceByMonthVariables = {
    studentId: ..., 
    fromDate: ..., 
    toDate: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAttendanceByMonth(getAttendanceByMonthVars);
  // Variables can be defined inline as well.
  const query = useGetAttendanceByMonth({ studentId: ..., fromDate: ..., toDate: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAttendanceByMonth(dataConnect, getAttendanceByMonthVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttendanceByMonth(getAttendanceByMonthVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttendanceByMonth(dataConnect, getAttendanceByMonthVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.attendances);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAttendanceBySection
You can execute the `GetAttendanceBySection` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAttendanceBySection(dc: DataConnect, vars: GetAttendanceBySectionVariables, options?: useDataConnectQueryOptions<GetAttendanceBySectionData>): UseDataConnectQueryResult<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAttendanceBySection(vars: GetAttendanceBySectionVariables, options?: useDataConnectQueryOptions<GetAttendanceBySectionData>): UseDataConnectQueryResult<GetAttendanceBySectionData, GetAttendanceBySectionVariables>;
```

### Variables
The `GetAttendanceBySection` Query requires an argument of type `GetAttendanceBySectionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAttendanceBySectionVariables {
  sectionId: UUIDString;
  attendanceDate: DateString;
}
```
### Return Type
Recall that calling the `GetAttendanceBySection` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAttendanceBySection` Query is of type `GetAttendanceBySectionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetAttendanceBySectionData {
  attendances: ({
    id: UUIDString;
    studentId: UUIDString;
    academicClassId: UUIDString;
    sectionId: UUIDString;
    attendanceDate: DateString;
    status: string;
    markedById: UUIDString;
    editedById?: UUIDString | null;
    remarks?: string | null;
  } & Attendance_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAttendanceBySection`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAttendanceBySectionVariables } from '@dataconnect/generated';
import { useGetAttendanceBySection } from '@dataconnect/generated/react'

export default function GetAttendanceBySectionComponent() {
  // The `useGetAttendanceBySection` Query hook requires an argument of type `GetAttendanceBySectionVariables`:
  const getAttendanceBySectionVars: GetAttendanceBySectionVariables = {
    sectionId: ..., 
    attendanceDate: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAttendanceBySection(getAttendanceBySectionVars);
  // Variables can be defined inline as well.
  const query = useGetAttendanceBySection({ sectionId: ..., attendanceDate: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAttendanceBySection(dataConnect, getAttendanceBySectionVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttendanceBySection(getAttendanceBySectionVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttendanceBySection(dataConnect, getAttendanceBySectionVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.attendances);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetFeeDetails
You can execute the `GetFeeDetails` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetFeeDetails(dc: DataConnect, vars: GetFeeDetailsVariables, options?: useDataConnectQueryOptions<GetFeeDetailsData>): UseDataConnectQueryResult<GetFeeDetailsData, GetFeeDetailsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetFeeDetails(vars: GetFeeDetailsVariables, options?: useDataConnectQueryOptions<GetFeeDetailsData>): UseDataConnectQueryResult<GetFeeDetailsData, GetFeeDetailsVariables>;
```

### Variables
The `GetFeeDetails` Query requires an argument of type `GetFeeDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetFeeDetailsVariables {
  studentId: UUIDString;
}
```
### Return Type
Recall that calling the `GetFeeDetails` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetFeeDetails` Query is of type `GetFeeDetailsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetFeeDetailsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    updatedAt: TimestampString;
  } & StudentFee_Key)[];
    payments: ({
      id: UUIDString;
      studentId: UUIDString;
      studentFeeId: UUIDString;
      amount: number;
      paymentMode: string;
      receiptNumber?: string | null;
      uploadedById: UUIDString;
      remarks?: string | null;
      paidAt: TimestampString;
    } & Payment_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetFeeDetails`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetFeeDetailsVariables } from '@dataconnect/generated';
import { useGetFeeDetails } from '@dataconnect/generated/react'

export default function GetFeeDetailsComponent() {
  // The `useGetFeeDetails` Query hook requires an argument of type `GetFeeDetailsVariables`:
  const getFeeDetailsVars: GetFeeDetailsVariables = {
    studentId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetFeeDetails(getFeeDetailsVars);
  // Variables can be defined inline as well.
  const query = useGetFeeDetails({ studentId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetFeeDetails(dataConnect, getFeeDetailsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetFeeDetails(getFeeDetailsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetFeeDetails(dataConnect, getFeeDetailsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
    console.log(query.data.payments);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetFeeRecordsByBranch
You can execute the `GetFeeRecordsByBranch` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetFeeRecordsByBranch(dc: DataConnect, vars: GetFeeRecordsByBranchVariables, options?: useDataConnectQueryOptions<GetFeeRecordsByBranchData>): UseDataConnectQueryResult<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetFeeRecordsByBranch(vars: GetFeeRecordsByBranchVariables, options?: useDataConnectQueryOptions<GetFeeRecordsByBranchData>): UseDataConnectQueryResult<GetFeeRecordsByBranchData, GetFeeRecordsByBranchVariables>;
```

### Variables
The `GetFeeRecordsByBranch` Query requires an argument of type `GetFeeRecordsByBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetFeeRecordsByBranchVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetFeeRecordsByBranch` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetFeeRecordsByBranch` Query is of type `GetFeeRecordsByBranchData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetFeeRecordsByBranchData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetFeeRecordsByBranch`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetFeeRecordsByBranchVariables } from '@dataconnect/generated';
import { useGetFeeRecordsByBranch } from '@dataconnect/generated/react'

export default function GetFeeRecordsByBranchComponent() {
  // The `useGetFeeRecordsByBranch` Query hook requires an argument of type `GetFeeRecordsByBranchVariables`:
  const getFeeRecordsByBranchVars: GetFeeRecordsByBranchVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetFeeRecordsByBranch(getFeeRecordsByBranchVars);
  // Variables can be defined inline as well.
  const query = useGetFeeRecordsByBranch({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetFeeRecordsByBranch(dataConnect, getFeeRecordsByBranchVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetFeeRecordsByBranch(getFeeRecordsByBranchVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetFeeRecordsByBranch(dataConnect, getFeeRecordsByBranchVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAllFeeRecords
You can execute the `GetAllFeeRecords` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAllFeeRecords(dc: DataConnect, vars?: GetAllFeeRecordsVariables, options?: useDataConnectQueryOptions<GetAllFeeRecordsData>): UseDataConnectQueryResult<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAllFeeRecords(vars?: GetAllFeeRecordsVariables, options?: useDataConnectQueryOptions<GetAllFeeRecordsData>): UseDataConnectQueryResult<GetAllFeeRecordsData, GetAllFeeRecordsVariables>;
```

### Variables
The `GetAllFeeRecords` Query has an optional argument of type `GetAllFeeRecordsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAllFeeRecordsVariables {
  limit?: number | null;
  offset?: number | null;
}
```
### Return Type
Recall that calling the `GetAllFeeRecords` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAllFeeRecords` Query is of type `GetAllFeeRecordsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetAllFeeRecordsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    feeStructureId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      academicClassId: UUIDString;
      sectionId: UUIDString;
      parentId: UUIDString;
      phoneNumber?: string | null;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAllFeeRecords`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAllFeeRecordsVariables } from '@dataconnect/generated';
import { useGetAllFeeRecords } from '@dataconnect/generated/react'

export default function GetAllFeeRecordsComponent() {
  // The `useGetAllFeeRecords` Query hook has an optional argument of type `GetAllFeeRecordsVariables`:
  const getAllFeeRecordsVars: GetAllFeeRecordsVariables = {
    limit: ..., // optional
    offset: ..., // optional
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAllFeeRecords(getAllFeeRecordsVars);
  // Variables can be defined inline as well.
  const query = useGetAllFeeRecords({ limit: ..., offset: ..., });
  // Since all variables are optional for this Query, you can omit the `GetAllFeeRecordsVariables` argument.
  // (as long as you don't want to provide any `options`!)
  const query = useGetAllFeeRecords();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAllFeeRecords(dataConnect, getAllFeeRecordsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllFeeRecords(getAllFeeRecordsVars, options);
  // If you'd like to provide options without providing any variables, you must
  // pass `undefined` where you would normally pass the variables.
  const query = useGetAllFeeRecords(undefined, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAllFeeRecords(dataConnect, getAllFeeRecordsVars /** or undefined */, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetDueStudents
You can execute the `GetDueStudents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetDueStudents(dc: DataConnect, vars: GetDueStudentsVariables, options?: useDataConnectQueryOptions<GetDueStudentsData>): UseDataConnectQueryResult<GetDueStudentsData, GetDueStudentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetDueStudents(vars: GetDueStudentsVariables, options?: useDataConnectQueryOptions<GetDueStudentsData>): UseDataConnectQueryResult<GetDueStudentsData, GetDueStudentsVariables>;
```

### Variables
The `GetDueStudents` Query requires an argument of type `GetDueStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetDueStudentsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetDueStudents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetDueStudents` Query is of type `GetDueStudentsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetDueStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetDueStudents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetDueStudentsVariables } from '@dataconnect/generated';
import { useGetDueStudents } from '@dataconnect/generated/react'

export default function GetDueStudentsComponent() {
  // The `useGetDueStudents` Query hook requires an argument of type `GetDueStudentsVariables`:
  const getDueStudentsVars: GetDueStudentsVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetDueStudents(getDueStudentsVars);
  // Variables can be defined inline as well.
  const query = useGetDueStudents({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetDueStudents(dataConnect, getDueStudentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetDueStudents(getDueStudentsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetDueStudents(dataConnect, getDueStudentsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetPaidStudents
You can execute the `GetPaidStudents` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetPaidStudents(dc: DataConnect, vars: GetPaidStudentsVariables, options?: useDataConnectQueryOptions<GetPaidStudentsData>): UseDataConnectQueryResult<GetPaidStudentsData, GetPaidStudentsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetPaidStudents(vars: GetPaidStudentsVariables, options?: useDataConnectQueryOptions<GetPaidStudentsData>): UseDataConnectQueryResult<GetPaidStudentsData, GetPaidStudentsVariables>;
```

### Variables
The `GetPaidStudents` Query requires an argument of type `GetPaidStudentsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetPaidStudentsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetPaidStudents` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetPaidStudents` Query is of type `GetPaidStudentsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetPaidStudentsData {
  studentFees: ({
    id: UUIDString;
    studentId: UUIDString;
    totalFee: number;
    paidAmount: number;
    remainingAmount: number;
    status: string;
    dueDate: DateString;
    student: {
      id: UUIDString;
      studentId: string;
      fullName: string;
      branchId: UUIDString;
      wingId?: UUIDString | null;
      sectionId: UUIDString;
    } & Student_Key;
  } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetPaidStudents`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetPaidStudentsVariables } from '@dataconnect/generated';
import { useGetPaidStudents } from '@dataconnect/generated/react'

export default function GetPaidStudentsComponent() {
  // The `useGetPaidStudents` Query hook requires an argument of type `GetPaidStudentsVariables`:
  const getPaidStudentsVars: GetPaidStudentsVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetPaidStudents(getPaidStudentsVars);
  // Variables can be defined inline as well.
  const query = useGetPaidStudents({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetPaidStudents(dataConnect, getPaidStudentsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetPaidStudents(getPaidStudentsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetPaidStudents(dataConnect, getPaidStudentsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetBranchAnalytics
You can execute the `GetBranchAnalytics` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetBranchAnalytics(dc: DataConnect, vars: GetBranchAnalyticsVariables, options?: useDataConnectQueryOptions<GetBranchAnalyticsData>): UseDataConnectQueryResult<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetBranchAnalytics(vars: GetBranchAnalyticsVariables, options?: useDataConnectQueryOptions<GetBranchAnalyticsData>): UseDataConnectQueryResult<GetBranchAnalyticsData, GetBranchAnalyticsVariables>;
```

### Variables
The `GetBranchAnalytics` Query requires an argument of type `GetBranchAnalyticsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetBranchAnalyticsVariables {
  branchId: UUIDString;
}
```
### Return Type
Recall that calling the `GetBranchAnalytics` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetBranchAnalytics` Query is of type `GetBranchAnalyticsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetBranchAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        paidAmount: number;
        remainingAmount: number;
      } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetBranchAnalytics`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetBranchAnalyticsVariables } from '@dataconnect/generated';
import { useGetBranchAnalytics } from '@dataconnect/generated/react'

export default function GetBranchAnalyticsComponent() {
  // The `useGetBranchAnalytics` Query hook requires an argument of type `GetBranchAnalyticsVariables`:
  const getBranchAnalyticsVars: GetBranchAnalyticsVariables = {
    branchId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetBranchAnalytics(getBranchAnalyticsVars);
  // Variables can be defined inline as well.
  const query = useGetBranchAnalytics({ branchId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetBranchAnalytics(dataConnect, getBranchAnalyticsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranchAnalytics(getBranchAnalyticsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetBranchAnalytics(dataConnect, getBranchAnalyticsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetClassAnalytics
You can execute the `GetClassAnalytics` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetClassAnalytics(dc: DataConnect, vars: GetClassAnalyticsVariables, options?: useDataConnectQueryOptions<GetClassAnalyticsData>): UseDataConnectQueryResult<GetClassAnalyticsData, GetClassAnalyticsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetClassAnalytics(vars: GetClassAnalyticsVariables, options?: useDataConnectQueryOptions<GetClassAnalyticsData>): UseDataConnectQueryResult<GetClassAnalyticsData, GetClassAnalyticsVariables>;
```

### Variables
The `GetClassAnalytics` Query requires an argument of type `GetClassAnalyticsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetClassAnalyticsVariables {
  academicClassId: UUIDString;
}
```
### Return Type
Recall that calling the `GetClassAnalytics` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetClassAnalytics` Query is of type `GetClassAnalyticsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetClassAnalyticsData {
  students: ({
    id: UUIDString;
  } & Student_Key)[];
    attendances: ({
      id: UUIDString;
      status: string;
    } & Attendance_Key)[];
      studentFees: ({
        id: UUIDString;
        paidAmount: number;
        remainingAmount: number;
      } & StudentFee_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetClassAnalytics`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetClassAnalyticsVariables } from '@dataconnect/generated';
import { useGetClassAnalytics } from '@dataconnect/generated/react'

export default function GetClassAnalyticsComponent() {
  // The `useGetClassAnalytics` Query hook requires an argument of type `GetClassAnalyticsVariables`:
  const getClassAnalyticsVars: GetClassAnalyticsVariables = {
    academicClassId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetClassAnalytics(getClassAnalyticsVars);
  // Variables can be defined inline as well.
  const query = useGetClassAnalytics({ academicClassId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetClassAnalytics(dataConnect, getClassAnalyticsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassAnalytics(getClassAnalyticsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetClassAnalytics(dataConnect, getClassAnalyticsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.students);
    console.log(query.data.attendances);
    console.log(query.data.studentFees);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `nsrit` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateBranch
You can execute the `CreateBranch` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateBranch(options?: useDataConnectMutationOptions<CreateBranchData, FirebaseError, CreateBranchVariables>): UseDataConnectMutationResult<CreateBranchData, CreateBranchVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateBranch(dc: DataConnect, options?: useDataConnectMutationOptions<CreateBranchData, FirebaseError, CreateBranchVariables>): UseDataConnectMutationResult<CreateBranchData, CreateBranchVariables>;
```

### Variables
The `CreateBranch` Mutation requires an argument of type `CreateBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateBranchVariables {
  name: string;
  branchCode: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status?: string | null;
}
```
### Return Type
Recall that calling the `CreateBranch` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateBranch` Mutation is of type `CreateBranchData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateBranchData {
  branch_insert: Branch_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateBranch`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateBranchVariables } from '@dataconnect/generated';
import { useCreateBranch } from '@dataconnect/generated/react'

export default function CreateBranchComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateBranch();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateBranch(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateBranch(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateBranch(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateBranch` Mutation requires an argument of type `CreateBranchVariables`:
  const createBranchVars: CreateBranchVariables = {
    name: ..., 
    branchCode: ..., 
    address: ..., // optional
    city: ..., // optional
    state: ..., // optional
    pincode: ..., // optional
    phone: ..., // optional
    email: ..., // optional
    status: ..., // optional
  };
  mutation.mutate(createBranchVars);
  // Variables can be defined inline as well.
  mutation.mutate({ name: ..., branchCode: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createBranchVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.branch_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateBranch
You can execute the `UpdateBranch` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateBranch(options?: useDataConnectMutationOptions<UpdateBranchData, FirebaseError, UpdateBranchVariables>): UseDataConnectMutationResult<UpdateBranchData, UpdateBranchVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateBranch(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateBranchData, FirebaseError, UpdateBranchVariables>): UseDataConnectMutationResult<UpdateBranchData, UpdateBranchVariables>;
```

### Variables
The `UpdateBranch` Mutation requires an argument of type `UpdateBranchVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateBranchVariables {
  id: UUIDString;
  name: string;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  phone?: string | null;
  email?: string | null;
  status: string;
  isActive: boolean;
}
```
### Return Type
Recall that calling the `UpdateBranch` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateBranch` Mutation is of type `UpdateBranchData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateBranchData {
  branch_update?: Branch_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateBranch`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateBranchVariables } from '@dataconnect/generated';
import { useUpdateBranch } from '@dataconnect/generated/react'

export default function UpdateBranchComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateBranch();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateBranch(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateBranch(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateBranch(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateBranch` Mutation requires an argument of type `UpdateBranchVariables`:
  const updateBranchVars: UpdateBranchVariables = {
    id: ..., 
    name: ..., 
    address: ..., // optional
    city: ..., // optional
    state: ..., // optional
    pincode: ..., // optional
    phone: ..., // optional
    email: ..., // optional
    status: ..., 
    isActive: ..., 
  };
  mutation.mutate(updateBranchVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., name: ..., address: ..., city: ..., state: ..., pincode: ..., phone: ..., email: ..., status: ..., isActive: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateBranchVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.branch_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AssignBranchAdmin
You can execute the `AssignBranchAdmin` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAssignBranchAdmin(options?: useDataConnectMutationOptions<AssignBranchAdminData, FirebaseError, AssignBranchAdminVariables>): UseDataConnectMutationResult<AssignBranchAdminData, AssignBranchAdminVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAssignBranchAdmin(dc: DataConnect, options?: useDataConnectMutationOptions<AssignBranchAdminData, FirebaseError, AssignBranchAdminVariables>): UseDataConnectMutationResult<AssignBranchAdminData, AssignBranchAdminVariables>;
```

### Variables
The `AssignBranchAdmin` Mutation requires an argument of type `AssignBranchAdminVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AssignBranchAdminVariables {
  branchId: UUIDString;
  branchAdminId: UUIDString;
}
```
### Return Type
Recall that calling the `AssignBranchAdmin` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AssignBranchAdmin` Mutation is of type `AssignBranchAdminData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AssignBranchAdminData {
  branch_update?: Branch_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AssignBranchAdmin`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AssignBranchAdminVariables } from '@dataconnect/generated';
import { useAssignBranchAdmin } from '@dataconnect/generated/react'

export default function AssignBranchAdminComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAssignBranchAdmin();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAssignBranchAdmin(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignBranchAdmin(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignBranchAdmin(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAssignBranchAdmin` Mutation requires an argument of type `AssignBranchAdminVariables`:
  const assignBranchAdminVars: AssignBranchAdminVariables = {
    branchId: ..., 
    branchAdminId: ..., 
  };
  mutation.mutate(assignBranchAdminVars);
  // Variables can be defined inline as well.
  mutation.mutate({ branchId: ..., branchAdminId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(assignBranchAdminVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.branch_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AssignPrincipal
You can execute the `AssignPrincipal` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAssignPrincipal(options?: useDataConnectMutationOptions<AssignPrincipalData, FirebaseError, AssignPrincipalVariables>): UseDataConnectMutationResult<AssignPrincipalData, AssignPrincipalVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAssignPrincipal(dc: DataConnect, options?: useDataConnectMutationOptions<AssignPrincipalData, FirebaseError, AssignPrincipalVariables>): UseDataConnectMutationResult<AssignPrincipalData, AssignPrincipalVariables>;
```

### Variables
The `AssignPrincipal` Mutation requires an argument of type `AssignPrincipalVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AssignPrincipalVariables {
  branchId: UUIDString;
  principalId: UUIDString;
}
```
### Return Type
Recall that calling the `AssignPrincipal` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AssignPrincipal` Mutation is of type `AssignPrincipalData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AssignPrincipalData {
  branch_update?: Branch_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AssignPrincipal`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AssignPrincipalVariables } from '@dataconnect/generated';
import { useAssignPrincipal } from '@dataconnect/generated/react'

export default function AssignPrincipalComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAssignPrincipal();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAssignPrincipal(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignPrincipal(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignPrincipal(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAssignPrincipal` Mutation requires an argument of type `AssignPrincipalVariables`:
  const assignPrincipalVars: AssignPrincipalVariables = {
    branchId: ..., 
    principalId: ..., 
  };
  mutation.mutate(assignPrincipalVars);
  // Variables can be defined inline as well.
  mutation.mutate({ branchId: ..., principalId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(assignPrincipalVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.branch_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateClass
You can execute the `CreateClass` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateClass(options?: useDataConnectMutationOptions<CreateClassData, FirebaseError, CreateClassVariables>): UseDataConnectMutationResult<CreateClassData, CreateClassVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateClass(dc: DataConnect, options?: useDataConnectMutationOptions<CreateClassData, FirebaseError, CreateClassVariables>): UseDataConnectMutationResult<CreateClassData, CreateClassVariables>;
```

### Variables
The `CreateClass` Mutation requires an argument of type `CreateClassVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateClassVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  name: string;
  displayOrder?: number | null;
}
```
### Return Type
Recall that calling the `CreateClass` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateClass` Mutation is of type `CreateClassData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateClassData {
  academicClass_insert: AcademicClass_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateClass`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateClassVariables } from '@dataconnect/generated';
import { useCreateClass } from '@dataconnect/generated/react'

export default function CreateClassComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateClass();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateClass(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClass(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateClass(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateClass` Mutation requires an argument of type `CreateClassVariables`:
  const createClassVars: CreateClassVariables = {
    branchId: ..., 
    wingId: ..., 
    name: ..., 
    displayOrder: ..., // optional
  };
  mutation.mutate(createClassVars);
  // Variables can be defined inline as well.
  mutation.mutate({ branchId: ..., wingId: ..., name: ..., displayOrder: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createClassVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.academicClass_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateSection
You can execute the `CreateSection` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateSection(options?: useDataConnectMutationOptions<CreateSectionData, FirebaseError, CreateSectionVariables>): UseDataConnectMutationResult<CreateSectionData, CreateSectionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateSection(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSectionData, FirebaseError, CreateSectionVariables>): UseDataConnectMutationResult<CreateSectionData, CreateSectionVariables>;
```

### Variables
The `CreateSection` Mutation requires an argument of type `CreateSectionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateSectionVariables {
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  name: string;
}
```
### Return Type
Recall that calling the `CreateSection` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateSection` Mutation is of type `CreateSectionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateSectionData {
  section_insert: Section_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateSection`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateSectionVariables } from '@dataconnect/generated';
import { useCreateSection } from '@dataconnect/generated/react'

export default function CreateSectionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateSection();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateSection(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateSection(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateSection(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateSection` Mutation requires an argument of type `CreateSectionVariables`:
  const createSectionVars: CreateSectionVariables = {
    branchId: ..., 
    wingId: ..., 
    academicClassId: ..., 
    name: ..., 
  };
  mutation.mutate(createSectionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ branchId: ..., wingId: ..., academicClassId: ..., name: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createSectionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.section_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## RemoveSection
You can execute the `RemoveSection` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useRemoveSection(options?: useDataConnectMutationOptions<RemoveSectionData, FirebaseError, RemoveSectionVariables>): UseDataConnectMutationResult<RemoveSectionData, RemoveSectionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useRemoveSection(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveSectionData, FirebaseError, RemoveSectionVariables>): UseDataConnectMutationResult<RemoveSectionData, RemoveSectionVariables>;
```

### Variables
The `RemoveSection` Mutation requires an argument of type `RemoveSectionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface RemoveSectionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `RemoveSection` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `RemoveSection` Mutation is of type `RemoveSectionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface RemoveSectionData {
  section_update?: Section_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `RemoveSection`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, RemoveSectionVariables } from '@dataconnect/generated';
import { useRemoveSection } from '@dataconnect/generated/react'

export default function RemoveSectionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useRemoveSection();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useRemoveSection(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRemoveSection(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useRemoveSection(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useRemoveSection` Mutation requires an argument of type `RemoveSectionVariables`:
  const removeSectionVars: RemoveSectionVariables = {
    id: ..., 
  };
  mutation.mutate(removeSectionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(removeSectionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.section_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateUser
You can execute the `CreateUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
```

### Variables
The `CreateUser` Mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateUserVariables {
  firebaseUID: string;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  role: string;
  branchId?: UUIDString | null;
  wingId?: UUIDString | null;
}
```
### Return Type
Recall that calling the `CreateUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateUser` Mutation is of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateUserData {
  user_insert: User_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateUserVariables } from '@dataconnect/generated';
import { useCreateUser } from '@dataconnect/generated/react'

export default function CreateUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateUser` Mutation requires an argument of type `CreateUserVariables`:
  const createUserVars: CreateUserVariables = {
    firebaseUID: ..., 
    fullName: ..., 
    countryCode: ..., 
    phoneNumber: ..., 
    role: ..., 
    branchId: ..., // optional
    wingId: ..., // optional
  };
  mutation.mutate(createUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ firebaseUID: ..., fullName: ..., countryCode: ..., phoneNumber: ..., role: ..., branchId: ..., wingId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ClaimUserFirebaseUID
You can execute the `ClaimUserFirebaseUID` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useClaimUserFirebaseUid(options?: useDataConnectMutationOptions<ClaimUserFirebaseUidData, FirebaseError, ClaimUserFirebaseUidVariables>): UseDataConnectMutationResult<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useClaimUserFirebaseUid(dc: DataConnect, options?: useDataConnectMutationOptions<ClaimUserFirebaseUidData, FirebaseError, ClaimUserFirebaseUidVariables>): UseDataConnectMutationResult<ClaimUserFirebaseUidData, ClaimUserFirebaseUidVariables>;
```

### Variables
The `ClaimUserFirebaseUID` Mutation requires an argument of type `ClaimUserFirebaseUidVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ClaimUserFirebaseUidVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `ClaimUserFirebaseUID` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ClaimUserFirebaseUID` Mutation is of type `ClaimUserFirebaseUidData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ClaimUserFirebaseUidData {
  user_update?: User_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ClaimUserFirebaseUID`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ClaimUserFirebaseUidVariables } from '@dataconnect/generated';
import { useClaimUserFirebaseUid } from '@dataconnect/generated/react'

export default function ClaimUserFirebaseUidComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useClaimUserFirebaseUid();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useClaimUserFirebaseUid(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useClaimUserFirebaseUid(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useClaimUserFirebaseUid(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useClaimUserFirebaseUid` Mutation requires an argument of type `ClaimUserFirebaseUidVariables`:
  const claimUserFirebaseUidVars: ClaimUserFirebaseUidVariables = {
    id: ..., 
  };
  mutation.mutate(claimUserFirebaseUidVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(claimUserFirebaseUidVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateParent
You can execute the `CreateParent` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateParent(options?: useDataConnectMutationOptions<CreateParentData, FirebaseError, CreateParentVariables>): UseDataConnectMutationResult<CreateParentData, CreateParentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateParent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateParentData, FirebaseError, CreateParentVariables>): UseDataConnectMutationResult<CreateParentData, CreateParentVariables>;
```

### Variables
The `CreateParent` Mutation requires an argument of type `CreateParentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateParentVariables {
  userId?: UUIDString | null;
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}
```
### Return Type
Recall that calling the `CreateParent` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateParent` Mutation is of type `CreateParentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateParentData {
  parent_insert: Parent_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateParent`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateParentVariables } from '@dataconnect/generated';
import { useCreateParent } from '@dataconnect/generated/react'

export default function CreateParentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateParent();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateParent(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateParent(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateParent(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateParent` Mutation requires an argument of type `CreateParentVariables`:
  const createParentVars: CreateParentVariables = {
    userId: ..., // optional
    branchId: ..., 
    fullName: ..., 
    countryCode: ..., 
    phoneNumber: ..., 
    address: ..., // optional
  };
  mutation.mutate(createParentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ userId: ..., branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createParentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.parent_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateParentWithoutUser
You can execute the `CreateParentWithoutUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateParentWithoutUser(options?: useDataConnectMutationOptions<CreateParentWithoutUserData, FirebaseError, CreateParentWithoutUserVariables>): UseDataConnectMutationResult<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateParentWithoutUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateParentWithoutUserData, FirebaseError, CreateParentWithoutUserVariables>): UseDataConnectMutationResult<CreateParentWithoutUserData, CreateParentWithoutUserVariables>;
```

### Variables
The `CreateParentWithoutUser` Mutation requires an argument of type `CreateParentWithoutUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateParentWithoutUserVariables {
  branchId: UUIDString;
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  address?: string | null;
}
```
### Return Type
Recall that calling the `CreateParentWithoutUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateParentWithoutUser` Mutation is of type `CreateParentWithoutUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateParentWithoutUserData {
  parent_insert: Parent_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateParentWithoutUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateParentWithoutUserVariables } from '@dataconnect/generated';
import { useCreateParentWithoutUser } from '@dataconnect/generated/react'

export default function CreateParentWithoutUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateParentWithoutUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateParentWithoutUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateParentWithoutUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateParentWithoutUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateParentWithoutUser` Mutation requires an argument of type `CreateParentWithoutUserVariables`:
  const createParentWithoutUserVars: CreateParentWithoutUserVariables = {
    branchId: ..., 
    fullName: ..., 
    countryCode: ..., 
    phoneNumber: ..., 
    address: ..., // optional
  };
  mutation.mutate(createParentWithoutUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ branchId: ..., fullName: ..., countryCode: ..., phoneNumber: ..., address: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createParentWithoutUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.parent_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateStudent
You can execute the `CreateStudent` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateStudent(options?: useDataConnectMutationOptions<CreateStudentData, FirebaseError, CreateStudentVariables>): UseDataConnectMutationResult<CreateStudentData, CreateStudentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateStudent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateStudentData, FirebaseError, CreateStudentVariables>): UseDataConnectMutationResult<CreateStudentData, CreateStudentVariables>;
```

### Variables
The `CreateStudent` Mutation requires an argument of type `CreateStudentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateStudentVariables {
  studentId: string;
  admissionYear: number;
  branchCode: string;
  serialNumber: number;
  fullName: string;
  gender?: string | null;
  dateOfBirth?: DateString | null;
  branchId: UUIDString;
  wingId?: UUIDString | null;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  parentId: UUIDString;
  countryCode?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  admissionDate: DateString;
}
```
### Return Type
Recall that calling the `CreateStudent` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateStudent` Mutation is of type `CreateStudentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateStudentData {
  studentIdSequence_upsert: StudentIdSequence_Key;
  student_insert: Student_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateStudent`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateStudentVariables } from '@dataconnect/generated';
import { useCreateStudent } from '@dataconnect/generated/react'

export default function CreateStudentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateStudent();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateStudent(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateStudent(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateStudent(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateStudent` Mutation requires an argument of type `CreateStudentVariables`:
  const createStudentVars: CreateStudentVariables = {
    studentId: ..., 
    admissionYear: ..., 
    branchCode: ..., 
    serialNumber: ..., 
    fullName: ..., 
    gender: ..., // optional
    dateOfBirth: ..., // optional
    branchId: ..., 
    wingId: ..., // optional
    academicClassId: ..., 
    sectionId: ..., 
    parentId: ..., 
    countryCode: ..., // optional
    phoneNumber: ..., // optional
    address: ..., // optional
    admissionDate: ..., 
  };
  mutation.mutate(createStudentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ studentId: ..., admissionYear: ..., branchCode: ..., serialNumber: ..., fullName: ..., gender: ..., dateOfBirth: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., parentId: ..., countryCode: ..., phoneNumber: ..., address: ..., admissionDate: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createStudentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.studentIdSequence_upsert);
    console.log(mutation.data.student_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateAttendance
You can execute the `CreateAttendance` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateAttendance(options?: useDataConnectMutationOptions<CreateAttendanceData, FirebaseError, CreateAttendanceVariables>): UseDataConnectMutationResult<CreateAttendanceData, CreateAttendanceVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateAttendance(dc: DataConnect, options?: useDataConnectMutationOptions<CreateAttendanceData, FirebaseError, CreateAttendanceVariables>): UseDataConnectMutationResult<CreateAttendanceData, CreateAttendanceVariables>;
```

### Variables
The `CreateAttendance` Mutation requires an argument of type `CreateAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateAttendanceVariables {
  studentId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  attendanceDate: DateString;
  status: string;
  markedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that calling the `CreateAttendance` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateAttendance` Mutation is of type `CreateAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateAttendanceData {
  attendance_insert: Attendance_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateAttendance`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateAttendanceVariables } from '@dataconnect/generated';
import { useCreateAttendance } from '@dataconnect/generated/react'

export default function CreateAttendanceComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateAttendance();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateAttendance(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateAttendance(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateAttendance(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateAttendance` Mutation requires an argument of type `CreateAttendanceVariables`:
  const createAttendanceVars: CreateAttendanceVariables = {
    studentId: ..., 
    academicClassId: ..., 
    sectionId: ..., 
    attendanceDate: ..., 
    status: ..., 
    markedById: ..., 
    remarks: ..., // optional
  };
  mutation.mutate(createAttendanceVars);
  // Variables can be defined inline as well.
  mutation.mutate({ studentId: ..., academicClassId: ..., sectionId: ..., attendanceDate: ..., status: ..., markedById: ..., remarks: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createAttendanceVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.attendance_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateAttendance
You can execute the `UpdateAttendance` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateAttendance(options?: useDataConnectMutationOptions<UpdateAttendanceData, FirebaseError, UpdateAttendanceVariables>): UseDataConnectMutationResult<UpdateAttendanceData, UpdateAttendanceVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateAttendance(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateAttendanceData, FirebaseError, UpdateAttendanceVariables>): UseDataConnectMutationResult<UpdateAttendanceData, UpdateAttendanceVariables>;
```

### Variables
The `UpdateAttendance` Mutation requires an argument of type `UpdateAttendanceVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateAttendanceVariables {
  id: UUIDString;
  status: string;
  editedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that calling the `UpdateAttendance` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateAttendance` Mutation is of type `UpdateAttendanceData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateAttendanceData {
  attendance_update?: Attendance_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateAttendance`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateAttendanceVariables } from '@dataconnect/generated';
import { useUpdateAttendance } from '@dataconnect/generated/react'

export default function UpdateAttendanceComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateAttendance();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateAttendance(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateAttendance(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateAttendance(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateAttendance` Mutation requires an argument of type `UpdateAttendanceVariables`:
  const updateAttendanceVars: UpdateAttendanceVariables = {
    id: ..., 
    status: ..., 
    editedById: ..., 
    remarks: ..., // optional
  };
  mutation.mutate(updateAttendanceVars);
  // Variables can be defined inline as well.
  mutation.mutate({ id: ..., status: ..., editedById: ..., remarks: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateAttendanceVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.attendance_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UploadFeePayment
You can execute the `UploadFeePayment` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUploadFeePayment(options?: useDataConnectMutationOptions<UploadFeePaymentData, FirebaseError, UploadFeePaymentVariables>): UseDataConnectMutationResult<UploadFeePaymentData, UploadFeePaymentVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUploadFeePayment(dc: DataConnect, options?: useDataConnectMutationOptions<UploadFeePaymentData, FirebaseError, UploadFeePaymentVariables>): UseDataConnectMutationResult<UploadFeePaymentData, UploadFeePaymentVariables>;
```

### Variables
The `UploadFeePayment` Mutation requires an argument of type `UploadFeePaymentVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UploadFeePaymentVariables {
  studentId: UUIDString;
  studentFeeId: UUIDString;
  amount: number;
  paymentMode: string;
  receiptNumber?: string | null;
  uploadedById: UUIDString;
  remarks?: string | null;
}
```
### Return Type
Recall that calling the `UploadFeePayment` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UploadFeePayment` Mutation is of type `UploadFeePaymentData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UploadFeePaymentData {
  payment_insert: Payment_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UploadFeePayment`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UploadFeePaymentVariables } from '@dataconnect/generated';
import { useUploadFeePayment } from '@dataconnect/generated/react'

export default function UploadFeePaymentComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUploadFeePayment();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUploadFeePayment(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUploadFeePayment(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUploadFeePayment(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUploadFeePayment` Mutation requires an argument of type `UploadFeePaymentVariables`:
  const uploadFeePaymentVars: UploadFeePaymentVariables = {
    studentId: ..., 
    studentFeeId: ..., 
    amount: ..., 
    paymentMode: ..., 
    receiptNumber: ..., // optional
    uploadedById: ..., 
    remarks: ..., // optional
  };
  mutation.mutate(uploadFeePaymentVars);
  // Variables can be defined inline as well.
  mutation.mutate({ studentId: ..., studentFeeId: ..., amount: ..., paymentMode: ..., receiptNumber: ..., uploadedById: ..., remarks: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(uploadFeePaymentVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.payment_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AssignTeacher
You can execute the `AssignTeacher` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useAssignTeacher(options?: useDataConnectMutationOptions<AssignTeacherData, FirebaseError, AssignTeacherVariables>): UseDataConnectMutationResult<AssignTeacherData, AssignTeacherVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useAssignTeacher(dc: DataConnect, options?: useDataConnectMutationOptions<AssignTeacherData, FirebaseError, AssignTeacherVariables>): UseDataConnectMutationResult<AssignTeacherData, AssignTeacherVariables>;
```

### Variables
The `AssignTeacher` Mutation requires an argument of type `AssignTeacherVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AssignTeacherVariables {
  teacherId: UUIDString;
  branchId: UUIDString;
  wingId: UUIDString;
  academicClassId: UUIDString;
  sectionId: UUIDString;
  subjectName?: string | null;
  isClassTeacher: boolean;
}
```
### Return Type
Recall that calling the `AssignTeacher` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `AssignTeacher` Mutation is of type `AssignTeacherData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AssignTeacherData {
  teacherAssignment_insert: TeacherAssignment_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `AssignTeacher`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AssignTeacherVariables } from '@dataconnect/generated';
import { useAssignTeacher } from '@dataconnect/generated/react'

export default function AssignTeacherComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useAssignTeacher();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useAssignTeacher(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignTeacher(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useAssignTeacher(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useAssignTeacher` Mutation requires an argument of type `AssignTeacherVariables`:
  const assignTeacherVars: AssignTeacherVariables = {
    teacherId: ..., 
    branchId: ..., 
    wingId: ..., 
    academicClassId: ..., 
    sectionId: ..., 
    subjectName: ..., // optional
    isClassTeacher: ..., 
  };
  mutation.mutate(assignTeacherVars);
  // Variables can be defined inline as well.
  mutation.mutate({ teacherId: ..., branchId: ..., wingId: ..., academicClassId: ..., sectionId: ..., subjectName: ..., isClassTeacher: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(assignTeacherVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.teacherAssignment_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

