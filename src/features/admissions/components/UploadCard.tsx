// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { UploadCloud, CheckCircle2, X, AlertCircle, FileText } from "lucide-react";

// interface Props {
//   label: string;
//   hint?: string;
//   file?: File | null;
//   accept?: string;
//   maxSizeMb?: number;
//   onChange: (file: File | null) => void;
// }

// const DEFAULT_ACCEPT = "image/png,image/jpeg,application/pdf";
// const DEFAULT_MAX_MB = 5;

// export function UploadCard({
//   label,
//   hint = "PNG, JPG or PDF, up to 5 MB",
//   file,
//   accept = DEFAULT_ACCEPT,
//   maxSizeMb = DEFAULT_MAX_MB,
//   onChange,
// }: Props) {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);

//   useEffect(() => {
//     if (file && file.type.startsWith("image/")) {
//       const url = URL.createObjectURL(file);
//       setPreviewUrl(url);
//       return () => URL.revokeObjectURL(url);
//     }
//     setPreviewUrl(null);
//   }, [file]);

//   const validateAndSet = (candidate: File | null) => {
//     if (!candidate) {
//       onChange(null);
//       return;
//     }

//     const allowedTypes = accept.split(",");
//     if (!allowedTypes.includes(candidate.type)) {
//       setError("Unsupported file type");
//       return;
//     }

//     if (candidate.size > maxSizeMb * 1024 * 1024) {
//       setError(`File must be under ${maxSizeMb} MB`);
//       return;
//     }

//     setError(null);
//     onChange(candidate);
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     validateAndSet(e.target.files?.[0] ?? null);
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);
//     validateAndSet(e.dataTransfer.files?.[0] ?? null);
//   };

//   const clear = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setError(null);
//     onChange(null);
//     if (inputRef.current) inputRef.current.value = "";
//   };

//   return (
//     <div>
//       <div
//         role="button"
//         tabIndex={0}
//         aria-label={`Upload ${label}`}
//         onClick={() => inputRef.current?.click()}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
//         }}
//         onDragOver={(e) => {
//           e.preventDefault();
//           setIsDragging(true);
//         }}
//         onDragLeave={() => setIsDragging(false)}
//         onDrop={handleDrop}
//         className={`cursor-pointer rounded-xl border-2 border-dashed p-5 transition-colors ${
//           isDragging
//             ? "border-primary bg-primary/5"
//             : error
//             ? "border-red-300 bg-red-50/50"
//             : file
//             ? "border-emerald-300 bg-emerald-50/40"
//             : "border-border hover:bg-muted/40"
//         }`}
//       >
//         <input
//           ref={inputRef}
//           type="file"
//           accept={accept}
//           hidden
//           onChange={handleFile}
//         />

//         <div className="flex items-center gap-3">
//           <AnimatePresence mode="wait" initial={false}>
//             {previewUrl ? (
//               <motion.img
//                 key="preview"
//                 src={previewUrl}
//                 alt=""
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="h-11 w-11 rounded-lg object-cover"
//               />
//             ) : file ? (
//               <motion.div
//                 key="success"
//                 initial={{ scale: 0.6, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
//               >
//                 {file.type === "application/pdf" ? (
//                   <FileText size={20} />
//                 ) : (
//                   <CheckCircle2 size={22} />
//                 )}
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="empty"
//                 initial={{ scale: 0.6, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary"
//               >
//                 <UploadCloud size={20} />
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <div className="min-w-0 flex-1">
//             <p className="font-medium">{label}</p>
//             <p className="truncate text-sm text-muted-foreground">
//               {file ? file.name : hint}
//             </p>
//           </div>

//           {file && (
//             <button
//               type="button"
//               onClick={clear}
//               aria-label={`Remove ${label}`}
//               className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//             >
//               <X size={16} />
//             </button>
//           )}
//         </div>
//       </div>

//       <AnimatePresence>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -4, height: 0 }}
//             animate={{ opacity: 1, y: 0, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.18 }}
//             className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
//           >
//             <AlertCircle size={13} />
//             {error}
//           </motion.p>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import {  useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UploadCloud, CheckCircle2, X, AlertCircle, Loader2 } from "lucide-react";
import { useUploadDocument } from "../hooks/useUploadDocument";

interface UploadResult {
  key: string;
  url: string;
}

interface Props {
  label: string;
  hint?: string;
  value?: UploadResult | null;       // already-uploaded result (preview ke liye)
  accept?: string;
  maxSizeMb?: number;
  onUploaded: (result: UploadResult | null) => void; // upload complete hone par parent ko milega
}

const DEFAULT_ACCEPT = "image/png,image/jpeg,image/webp";
const DEFAULT_MAX_MB = 5;

export function UploadCard({
  label,
  hint = "PNG, JPG or WEBP, up to 5 MB",
  value,
  accept = DEFAULT_ACCEPT,
  maxSizeMb = DEFAULT_MAX_MB,
  onUploaded,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { uploadAvatarAsync } = useUploadDocument();

  // local preview while waiting for the network response
  const [localPreview, setLocalPreview] = useState<string | null>(null);

//   useEffect(() => {
//     return () => {
//       if (localPreview) URL.revokeObjectURL(localPreview);
//     };
//   }, [localPreview]);

  const previewSrc = value?.url || localPreview || null;

  const validateAndUpload = async (candidate: File | null) => {
    if (!candidate) {
      onUploaded(null);
      return;
    }

    const allowedTypes = accept.split(",");
    if (!allowedTypes.includes(candidate.type)) {
      setError("Unsupported file type");
      return;
    }

    if (candidate.size > maxSizeMb * 1024 * 1024) {
      setError(`File must be under ${maxSizeMb} MB`);
      return;
    }

    setError(null);

  

    setIsUploading(true);
    try {
      const response = await uploadAvatarAsync(candidate);
      if (response?.key) {
        setLocalPreview(response.url);
        onUploaded( response);
      } else {
        throw new Error("Upload failed");
      }
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Upload failed. Only JPEG, PNG, and WEBP are allowed.";
      setError(message);
      onUploaded(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndUpload(e.target.files?.[0] ?? null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    validateAndUpload(e.dataTransfer.files?.[0] ?? null);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setError(null);
    setLocalPreview(null);
    onUploaded(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const hasValue = Boolean(value?.url);

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Upload ${label}`}
        onClick={() => !isUploading && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !isUploading) inputRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if (!isUploading) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => !isUploading && handleDrop(e)}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-5 transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : error
            ? "border-red-300 bg-red-50/50"
            : hasValue
            ? "border-emerald-300 bg-emerald-50/40"
            : "border-border hover:bg-muted/40"
        } ${isUploading ? "pointer-events-none opacity-70" : ""}`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          hidden
          onChange={handleFile}
          disabled={isUploading}
        />

        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait" initial={false}>
            {isUploading ? (
              <motion.div
                key="loading"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary"
              >
                <Loader2 size={20} className="animate-spin" />
              </motion.div>
            ) : previewSrc ? (
              <motion.img
                key="preview"
                src={previewSrc}
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-11 w-11 rounded-lg object-cover"
              />
            ) : hasValue ? (
              <motion.div
                key="success"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"
              >
                <CheckCircle2 size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary"
              >
                <UploadCloud size={20} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="min-w-0 flex-1">
            <p className="font-medium">{label}</p>
            <p className="truncate text-sm text-muted-foreground">
              {isUploading ? "Uploading..." : hasValue ? "File uploaded successfully" : hint}
            </p>
          </div>

          {hasValue && !isUploading && (
            <button
              type="button"
              onClick={clear}
              aria-label={`Remove ${label}`}
              className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"
          >
            <AlertCircle size={13} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}